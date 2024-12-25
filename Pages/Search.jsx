
import axios from "axios";
import { useState } from "react";
const Search = () => {
    const [search, setSearch] = useState("");
    const [std, setStd] = useState([]);
    const handleInput = (e) => {
        let search = e.target.value;
        setSearch(search);
        let api = `http://localhost:3000/student/?stdid=${search}`;
        axios.get(api).then((res) => {
            setStd(res.data);
            console.log(res.data)
        })
    }
    const ans = std.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.stdid}</td>
                    <td>{key.name}</td>
                    <td>{key.course}</td>
                    <td>{key.fees}</td>
                </tr>
            </>
        )
    })
    return (
        <>
            <br />
            <br />
            Enter Search ID :
            <br />
            <input placeholder="Type ID" style={{ width: "120px", margin: "10px", marginTop: "30px" }} type="text" value={search} onChange={handleInput} />
            {std.length === 0 && search && <div>No results found for "{search}"</div>}
            {std.length > 0 && (
                <table border="3" width="800px">
                    <tr>
                        <th>STD ID</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Fees</th>
                    </tr>
                    <tbody>{ans}</tbody>
                </table>
            )}
        </>
    )
}
export default Search;






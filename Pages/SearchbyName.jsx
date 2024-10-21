import { useState } from "react";
import axios from "axios";

const SearchByName = () => {
  const [sname, setSname] = useState("");
  const [mydata, setMydata] = useState([]);
  const [noRecordsFound, setNoRecordsFound] = useState(false);

  const handleChange = (e) => {
    const empname = e.target.value;
    setSname(empname);
// 
    if (empname.trim() === "") {
      setMydata([]);
      setNoRecordsFound(false);
      return;
    }

    const api = "http://localhost:3000/student"; 
    axios.get(api)
      .then((res) => {
        setMydata(res.data);

        // Check if no records match
        const matches = res.data.filter((key) =>
          key.name.toLowerCase().includes(empname.toLowerCase())
        );
        setNoRecordsFound(matches.length === 0); 
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  };

  const ans = mydata.map((key) => {
    if (key.name.toLowerCase().includes(sname.toLowerCase())) {
      return (
        <tr key={key.stdid}>
          <td>{key.stdid}</td>
          <td>{key.name}</td>
          <td>{key.course}</td>
          <td>{key.fees}</td>
        </tr>
      );
    }
    return null; // Return null for unmatched items
  });

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h4 style={{ color: "green", marginTop: "50px" }}>Search Student Name </h4>
      <input
        type="text"
        value={sname}
        onChange={handleChange}
        placeholder="Type STD Name..."
        style={{
          padding: "10px",
          width: "20%", // Adjusted width for better layout
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      />
      <hr size="1" color="green" style={{ margin: "20px 0" }} />

      {ans.length > 0 && (
        <table
          style={{
            width: "80%",
            margin: "0 auto",
            borderCollapse: "collapse",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          }}
        >
          <thead style={{ backgroundColor: "#f8f9fa" }}>
            <tr>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>STD ID</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Name</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Course</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Fees</th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </table>
      )}

      {noRecordsFound && sname.trim() !== "" && (
        <p style={{ color: "red", fontSize: "18px", fontWeight: "bold" }}>
          No records found
        </p>
      )}
    </div>
  );
};

export default SearchByName;

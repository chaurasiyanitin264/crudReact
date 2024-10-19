import axios from "axios";
import { useEffect, useState } from "react";

const Display = () => {
    const [mydata, setMydata] = useState([]);

    const loadData = () => {
        let api = "http://localhost:3000/student";
        axios.get(api).then((res) => {
            console.log(res.data);
            setMydata(res.data);
        });
    };

    useEffect(() => {
        loadData();
    }, []);

    const ans = mydata.map((key) => (
        <tr key={key.stdid}>
            <td>{key.stdid}</td>
            <td>{key.name}</td>
            <td>{key.course}</td>
            <td>{key.fees}</td>
        </tr>
    ));

    return (
        <div className="table-container">
            <h2 style={{ textAlign: "center" ,marginTop:"50px" }}>Student Data</h2>
            <div style={{ overflowX: 'auto' }}>
                <table style={{
                    width: "80%",
                    margin: "20px auto",
                    borderCollapse: "collapse",
                    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                    border: "1px solid #ddd"
                }}>
                    <thead>
                        <tr>
                            <th style={{
                                padding: "10px",
                                border: "1px solid #ddd",
                                textAlign: "center",
                            }}>STD</th>
                            <th style={{
                                padding: "10px",
                                border: "1px solid #ddd",
                                textAlign: "center",
                            }}>Name</th>
                            <th style={{
                                padding: "10px",
                                border: "1px solid #ddd",
                                textAlign: "center",
                            }}>Course</th>
                            <th style={{
                                padding: "10px",
                                border: "1px solid #ddd",
                                textAlign: "center",
                            }}>Fees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ans.length > 0 ? ans : (
                            <tr>
                                <td colSpan="4" style={{ textAlign: "center", padding: "10px" }}>No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Display;

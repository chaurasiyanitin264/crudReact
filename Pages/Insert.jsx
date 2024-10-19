import axios from "axios";
import { useState } from "react";
import React from 'react';
import { message } from "antd"; 
// import './Insert.css'; // Add your CSS file

const Insert = () => {
    const [input, setInput] = useState({
        stdid: "",
        name: "",
        course: "",
        fees: ""
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));
        console.log(input);
    }

    const handleSubmit = () => {
        let api = "http://localhost:3000/student";
        axios.post(api, input).then((res) => {
            console.log(res);
            message.info("Data saved successfully");
            setInput({
                stdid: "",
                name: "",
                course: "",
                fees: ""
            });
        });
    }

    return (
        <div className="form-container">
            <h2>Insert Student Data</h2>
            <div className="form-group">
                <label>Enter ID:</label>
                <input type="text" name="stdid" value={input.stdid} onChange={handleInput} />
            </div>
            <div className="form-group">
                <label>Enter Name:</label>
                <input type="text" name="name" value={input.name} onChange={handleInput} />
            </div>
            <div className="form-group">
                <label>Enter Course:</label>
                <input type="text" name="course" value={input.course} onChange={handleInput} />
            </div>
            <div className="form-group">
                <label>Enter Fees:</label>
                <input type="text" name="fees" value={input.fees} onChange={handleInput} />
            </div>
            <button className="submit-button" onClick={handleSubmit}>Save Data</button>
        </div>
    );
}

export default Insert;

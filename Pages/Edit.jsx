import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { message } from "antd";
import axios from "axios";
const EditData=()=>{
    const {myid} =useParams();
    const [mydata, setMydata]=useState({}); // mydata={}
    const loadData=()=>{
      let api=`http://localhost:3000/student/${myid}`;
      axios.get(api).then((res)=>{
        console.log(res.data);
        setMydata(res.data);
      })
    }
    useEffect(()=>{
        loadData();
    }, []);
    const handleInput=(e)=>{
          let name=e.target.name;
          let value=e.target.value;
          setMydata(values=>({...values, [name]:value}))
          console.log(mydata);
    }
   const handleSubmit=(e)=>{ 
      e.preventDefault();
    let api=`http://localhost:3000/student/${myid}`;
    axios.put(api, mydata).then((res)=>{
        message.success("Data succesfully updated!!!");
        setMydata({
            stdid:"",
            name:"",
            course:"",
            fees:""
        })
    })
   }
    return(
        <>
        <h1 style={{marginTop:"80px"}}> Edit Redcords :</h1>
        <form>
          Std ID. : <input style={{width:"200px"}} type="text" name="stdid" 
         value={mydata.stdid} onChange={handleInput} />
         <br/>
         <br/>
          Name : <input  style={{width:"200px"}} type="text" name="name" 
         value={mydata.name} onChange={handleInput} />
         <br/>
         <br/>
          Course : <input  style={{width:"200px"}} type="text" name="course" 
         value={mydata.course}  onChange={handleInput}/>
         <br/>
         <br/>
          Fees : <input  style={{width:"200px"}} type="text" name="fees" 
         value={mydata.fees} onChange={handleInput} />
         <br/>
         <br/>
         <button onClick={handleSubmit}>Update!</button>
         </form>
        </>
    )
}
export default EditData;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [data , meraData] = useState({
    name:"",
    age:0,
    email:""
  })

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    var userData = data;
    const {name , age , email } = userData;

    const response = await fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name , age , email}),
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
    //   setError(result.error);
    }
    // if (response.ok) {
    //   console.log(result);
    //   meraData.name('') ,
    //   meraData.age(0),
    //   meraData.email(''),
    //   navigate("/read");
    // }
    meraData({
        "name":"",
        "age":0,
        "email":""
    })
    navigate("/read");
  };


  const handleInputChange = (e) => {
    meraData({...data ,"name": e.target.value})
  };
  return (

    // <div className="container my-2">
    //   <h1 className="text-center h1">Fill the data</h1>

    //   {error && <div className="alert alert-danger"> {error} </div>}
    //   <form className="form" onSubmit={handleSubmit}>
    //     <div className="mb-3">
    //       <label className="form-label">Name</label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         value={fname}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label className="form-label">Email address</label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label className="form-label">Age</label>
    //       <input
    //         type="number"
    //         className="form-control"
    //         value={age}
    //         onChange={(e) => setAge(e.target.value)}
    //       />
    //     </div>
    //     <button type="submit" className="btn btn-primary">
    //       Submit
    //     </button>
    //   </form>
    // </div>
    <>
       <div className="container my-2">
        <h2>Heading</h2>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
  {/* we are adding another input field */}
  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={data.name} 
        onChange={handleInputChange}
    />
    <div id="emailHelp" className="form-text">We'll never share your Name with anyone else.</div>
  {/* we are endinh another input field */}
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"value={data.email}
        onChange={(e)=>{
            meraData({...data , "email" :e.target.value})
        }}
    />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
    <input type="number" className="form-control" id="exampleInputPassword1" value={data.age} onChange={(e)=>{
            meraData({...data , "age" :e.target.value})
        }}/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
       </div>
    </>
  );
};

export default Create;
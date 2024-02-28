import React, { useEffect, useState } from "react";
import { useNavigate, useParams  } from "react-router-dom";

const Update = () => {
const navigate = useNavigate();
  const [data , setData] = useState({
    name:"",
    age:"",
    email:""
  })
const id = useParams();
// console.log(id)
 const getOne = async()=>{
  const response = await fetch(`http://localhost:8000/${id.id}`)
  const data = await response.json();
  // console.log(data)
  setData({
    ...data,
    "name":data.name,
    "age":data.age,
    "email":data.email
  })
  

 }

  // const getUser = async(e)=>{
   

    






  // }

  const handleUpdate = async(e)=>{
    e.preventDefault();
    const {name , email , age} = data;
    const response = await fetch(`http://localhost:8000/edit/${id.id}`,{
      method:"PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({name , email , age}),
      
    }) 
    navigate("/read");
    


  }


useEffect(() => {
  getOne()
}, [])

  return (
    <div className="container my-2">
      <h1 className="text-center h1">Edit Data</h1>
     
      <form className="form" onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={data.name}
            onChange={(e) => setData({
              ...data,
              "name":e.target.value
            })
              
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={data.email}
            onChange={(e) => setData({
              ...data,
              "email":e.target.value
            })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={data.age}
            onChange={ (e)=>{
              setData({
              ...data,
              "age":e.target.value
            })
            }  
               }
          />
        </div>
        <button type="submit" className="btn btn-info">
          Onsubmit
        </button>
      </form>
    </div>
  );
};

export default Update;
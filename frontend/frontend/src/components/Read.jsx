import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';




const Read = () => {

const [data , setData] = useState([]);
    const showData = async()=>{

        const response = await fetch("http://localhost:8000/",{
            method:"GET"
        })

        const arr = await response.json();
        setData(arr);
      console.log(response);

    }
    useEffect(() => {
      
    
        showData()
      }, [])

   const meraDelete =async(id)=>{
        const response = await fetch(`http://localhost:8000/${id}`,{
            method:"DELETE"
        })
      showData();
        


    }


   
    
  return (
    <>
         <div className="container my-2">
            <div className="text-center row">
                {
                    data?.map((elem , index)=>(
                    
                    
                    <div key={index} className=" col-4">
                    <h1>{elem.name}</h1>
                    <p>{elem.email}</p>
                    <p>{elem.age}</p>
                    <div className='text-center'>
                   
                 <Link to={`${elem._id}`}> <button className='btn btn-success'  
                 >edit</button></Link>
                 
                 
                 
                    <button className='btn btn-danger' onClick={()=>{meraDelete(elem._id)}}>delete</button>
                    </div>
                    </div>
                    
                    ))
                }
                </div>  
        </div>
    </>
  )
}

export default Read

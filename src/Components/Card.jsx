import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
  

export default function Card(Props) {
    const navigate = useNavigate();
    const [user,setuser]=useState();
    useEffect(()=>{
        // console.log(Props.user);
        setuser(Props.user);
        // console.log(user);
    },[]);
    
  return (
    <div   style={{backgroundColor:"pink",display:"flex",justifyContent:"space-around",
    alignItems: "center",width:"600px",height:"150px",color:'black',marginTop:"50px"}} onClick={()=>navigate("/Singleuser",{state:{user1:{user}}})} >
        <div>
        <img src={Props.user.avatar} />
        
        </div>
        <div>
            <h3>Name: {Props.user.first_name}</h3>
            <h5>Email: {Props.user.email}</h5>
        </div>
    </div>
  )
}

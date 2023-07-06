import React,{ useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import {saveAs} from "file-saver";
export default function SingleUser() {
    const location=useLocation();
    const [userdetails,setuserdetails]=useState(location.state.user1.user);
    useEffect(()=>{
        console.log(userdetails);
    },[])
    const download=(Imagesrc,ImageName)=>{
            saveAs(Imagesrc,ImageName);
        
    }
  return (
    // <div>{location.state}</div>
    
    <div style={{marginTop:"75px",  marginLeft:'30%',justifyContent: "center",  display: "flex",flexDirection: "column",alignItems: "center",    backgroundColor: "#6eb5d2",height: "400px",width: "450px"}}>
        <h1>{userdetails.id}</h1>
        <div>
            <img src={userdetails.avatar} />

        </div>
        <div>
            <h3>Name: {userdetails.first_name} {userdetails.last_name}</h3>
            <h4>Email: {userdetails.email}</h4>
        </div>
        <button style={{backgroundColor: "black",width:"150px",height:"40px",color: "white"}} onClick={()=>{download(userdetails.avatar,userdetails.first_name)}}>Download Pic</button>
    </div>
 
  )
}

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
//create a prop containing the ip 

 function HomePage(){
    const [ip, ipData] = useState("") // varaible of the fetched ip
    const [showedTimeZone, showTimeZone] = useState(false) // event that shows ip timezone
                                         
  useEffect(()=>{
    fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(data => {
        ipData(data.ip)
        console.log(data.ip)

    })
    .catch(error =>{
      console.error("failed to fetch ip address:", error)
    })
      

  }, [showedTimeZone])
  
   const css = {
    color: "black",
    backgroundColor: "white",
    textAlign: "center",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px",
    width: "fit-content",
    position: "absolute",
    top: "50%",   
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1000"
  }

    function showIpTimeZone(e){
      e.preventDefault();
      
        showTimeZone(true)
    

    }
  
    return (
        <div>
         <div className="UserIpTimezone" style={css}>
            <title>timezone based on ip</title>
            <button onClick={showIpTimeZone} >show timezone</button>
            {showedTimeZone ? (
              <Link to = "src\ip.jsx">{ip}</Link>
            ) : (
              <p>click the button to show the timezone</p>
            )}  
        </div>
        
        </div>
      

    )
 }

export default HomePage()
 // https://timeapi.io/api/time/current/ip?ipAddress=237.71.232.203

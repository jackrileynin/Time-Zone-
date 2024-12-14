import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ip(){
    const {ip} = useParams()
    const [timezone, assignTimeZone] = useState("")  // variable of timezone taken after ip fetch
    useEffect(() => {
        if(ip){  
        fetch(`https://timeapi.io/api/time/current/ip?ipAddress=${ip}`)
        .then(res => res.json())
        .then(data => {
            assignTimeZone(data.timeZone)
            console.log(data)
            
        })
    }
    }, [ip])

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
        zIndex: "1000",
      };
    return (
        <div>
            <div className="IpTimezone" style={css}>
                <title>timezone based on ip</title>
                <p>{timezone}</p>
            </div>
        </div>
    )


}

export default ip
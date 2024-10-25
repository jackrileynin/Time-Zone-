import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function ip( {ip}){

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
    return (
        <div>
            <div className="IpTimezone">
                <title>timezone based on ip</title>
                <p>{timezone}</p>
            </div>
        </div>
    )


}

export default ip()
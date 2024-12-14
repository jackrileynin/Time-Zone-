import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [showedTimeZone, setShowedTimeZone] = useState(false); // Controls display of IP timezone
  const [ip, setIp] = useState(""); // State to store the fetched IP address

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const data = await fetch("https://api.ipify.org?format=json")
          .then(res => res.json())
          .then(data => {
            console.log(data);
            return data.ip;
          });
        setIp(data); // Store the fetched IP address in state
        console.log("Fetched IP:", data);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchIp(); // Call the function to fetch IP on component mount
  }, []); // Empty dependency array ensures this runs only once

  const handleShowTimeZone = (e) => {
    e.preventDefault();
    setShowedTimeZone(true); // Show the timezone link
  };

  // Inline CSS for styling
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
      <div className="UserIpTimezone" style={css}>
        <h1>Timezone Based on IP</h1>
        <button onClick={handleShowTimeZone}>Show Timezone</button>
        {showedTimeZone ? (
          <Link to={`/ip/${ip}`}> {ip} </Link> 
        ) : (
          <p>Click the button to show the timezone</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
"use client";

import React, { useEffect, useState } from "react";
import HeaderBar from "./nav";

const App = () => {
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    // Function to set the theme color
    const setThemeColor = () => {
      const themeColor = "#6A1B9A";
      let metaTag = document.querySelector("meta[name='theme-color']");

      if (!metaTag) {
        // Create a new meta tag if it doesn't exist
        metaTag = document.createElement("meta");
        metaTag.setAttribute("name", "theme-color");
        document.head.appendChild(metaTag);
      }

      // Set the theme color
      metaTag.setAttribute("content", themeColor);
    };

    // Function to detect Motorola devices
    const blockMotoPhones = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      if (userAgent.includes("moto")) {
        setIsBlocked(true);
      }
    };

    // Execute functions
    setThemeColor();
    blockMotoPhones();
  }, []);

  // If a Motorola device is detected, show the "Access Denied" message
  if (isBlocked) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Access Denied</h1>
        <p>Sorry, this website is not supported on Motorola devices.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Navigation Bar */}
      <HeaderBar />

      {/* Main Content */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {/* <h1>Welcome to My Website</h1>
        <p>This website works perfectly on your device!</p> */}
      </div>
    </div>
  );
};

export default App;

"use client";

import React, { useEffect, useState } from "react";
import HeaderBar from "./nav";

// Function to set the theme color
const setThemeColor = () => {
  const themeColor = "#FFFFFF";
  let metaTag = document.querySelector("meta[name='theme-color']");

  if (!metaTag) {
    metaTag = document.createElement("meta");
    metaTag.setAttribute("name", "theme-color");
    document.head.appendChild(metaTag);
  }
  metaTag.setAttribute("content", themeColor);
};

// Function to detect Motorola devices
const isMotoDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return /moto|motorola/.test(userAgent);
};

const App = () => {
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    setThemeColor();
    if (isMotoDevice()) setIsBlocked(true);
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

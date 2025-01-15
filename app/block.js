"use client"
import React, { useState, useEffect } from "react";

const BlockMotoPhones = () => {
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    // Get the user agent string
    const userAgent = navigator.userAgent.toLowerCase();

    // Check if the device is a Motorola phone
    if (userAgent.includes("moto") || userAgent.includes("motorola")) {
      setIsBlocked(true); // Block access for Motorola devices
    }
  }, []);

  if (isBlocked) {
    // Render error message for blocked devices
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Access Denied</h1>
        <p>
          Sorry, this website is not accessible on Motorola devices. Please use another device to access the content.
        </p>
      </div>
    );
  }

  // Render the normal website content for non-blocked devices
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <p>This website is accessible on your device.</p>
    </div>
  );
};

export default BlockMotoPhones;

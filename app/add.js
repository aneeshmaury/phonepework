"use client"
import React, { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    // First Script Tag
    const firstScript = document.createElement("script");
    firstScript.type = "text/javascript";
    firstScript.innerHTML = `
      atOptions = {
        'key' : '316751d2869a1e4b4d3efc1863e53fa7',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
      };
    `;
    document.body.appendChild(firstScript);

    // Second Script Tag
    const secondScript = document.createElement("script");
    secondScript.type = "text/javascript";
    secondScript.src = "//www.highperformanceformat.com/316751d2869a1e4b4d3efc1863e53fa7/invoke.js";
    document.body.appendChild(secondScript);

    // Cleanup to prevent duplicates
    return () => {
      document.body.removeChild(firstScript);
      document.body.removeChild(secondScript);
    };
  }, []);

  return <div id="ad-container" style={{ height: "60px", width: "468px" }}></div>;
};

export default AdBanner;

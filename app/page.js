"use client"

import React, { useEffect } from "react";

const App = () => {
  // Function to update the status bar color
  const updateThemeColor = (color) => {
    const metaTag = document.querySelector("meta[name='theme-color']");
    if (metaTag) {
      metaTag.setAttribute("content", color);
    } else {
      // If meta tag doesn't exist, create one
      const newMetaTag = document.createElement("meta");
      newMetaTag.setAttribute("name", "theme-color");
      newMetaTag.setAttribute("content", color);
      document.head.appendChild(newMetaTag);
    }
  };

  useEffect(() => {
    // Set initial theme color when component mounts
    updateThemeColor("#4CAF50"); // Green color
  }, []);

  return (
    <div>
      <h1>React Status Bar Color Change Example</h1>
      <button onClick={() => updateThemeColor("#FF5733")}>
        Change to Orange
      </button>
      <button onClick={() => updateThemeColor("#3498DB")}>
        Change to Blue
      </button>
    </div>
  );
};

export default App;
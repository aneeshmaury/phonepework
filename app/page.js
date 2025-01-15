"use client";

import React, { useEffect } from "react";
import HeaderBar from "./nav";
import BlockMotoPhones from "./block";

const App = () => {
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

    setThemeColor();
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <HeaderBar />

      {/* Block Moto Phones Logic */}
      <BlockMotoPhones />
    </div>
  );
};

export default App;

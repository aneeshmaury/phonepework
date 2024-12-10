"use client";

import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Set theme color to #6A1B9A
    const setThemeColor = () => {
      const metaTag = document.querySelector("meta[name='theme-color']");
      if (metaTag) {
        metaTag.setAttribute("content", "#6A1B9A");
      } else {
        // Create the meta tag if it doesn't exist
        const newMetaTag = document.createElement("meta");
        newMetaTag.setAttribute("name", "theme-color");
        newMetaTag.setAttribute("content", "#6A1B9A");
        document.head.appendChild(newMetaTag);
      }
    };

    setThemeColor();
  }, []);

  return (
    <div>
      <h1>React Status Bar Color lokjsdsjhfffffffffffffffffffffffffffffff
      </h1>
    </div>
  );
};

export default App;

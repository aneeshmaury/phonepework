import React, { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    // First Script Tag for atOptions
    const firstScript = document.createElement("script");
    firstScript.type = "text/javascript";
    firstScript.innerHTML = `
      atOptions = {
        'key' : '450bbb1311e64f25fcc793f45e6246fb',
        'format' : 'iframe',
        'height' : 300,
        'width' : 160,
        'params' : {}
      };
    `;
    document.body.appendChild(firstScript);

    // Second Script Tag for the external script
    const secondScript = document.createElement("script");
    secondScript.type = "text/javascript";
    secondScript.src = "//www.highperformanceformat.com/450bbb1311e64f25fcc793f45e6246fb/invoke.js";
    document.body.appendChild(secondScript);

    // Cleanup scripts on unmount
    return () => {
      document.body.removeChild(firstScript);
      document.body.removeChild(secondScript);
    };
  }, []);

  return <div id="ad-container" style={{ height: "300px", width: "160px" }}></div>;
};

export default AdBanner;

"use client";

import React, { useEffect, useState } from "react";

const App = () => {
    const [isBlocked, setIsBlocked] = useState(false);

    useEffect(() => {
        // Function to check if the device is Motorola
        const checkDevice = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            const blockedDevices = ["vivo", "iphone"];

            // Check for blocked device keywords
            for (let device of blockedDevices) {
                if (userAgent.includes(device)) {
                    setIsBlocked(true);
                    return;
                }
            }
        };

        // Call the function to check the device
        checkDevice();
    }, []);

    if (isBlocked) {
        // Render this message for blocked devices
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Access Denied</h1>
                <p>Sorry, this website is not accessible on Motorola devices.</p>
            </div>
        );
    }

    // Render the main content for non-blocked devices
    return (
        <div>
            <h1>Welcome to My Website</h1>
            <p>This website works perfectly on your device!</p>
        </div>
    );
};

export default App;

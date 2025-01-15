const express = require("express");
const app = express();

app.use((req, res, next) => {
    const userAgent = req.headers["user-agent"].toLowerCase();
    const blockedDevices = ["moto", "motorola"];

    // Check if the device is blocked
    for (let device of blockedDevices) {
        if (userAgent.includes(device)) {
            return res.status(403).send("Access Denied: Motorola devices are not allowed.");
        }
    }

    next();
});

app.get("/", (req, res) => {
    res.render('nav');
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

let tapCount = 0;

// Middleware to allow CORS (for testing)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  next();
});

// Serve static files (like index.html) from the current directory
app.use(express.static(path.join(__dirname)));

// Endpoint to record a tap
app.post("/tap", (req, res) => {
  tapCount++;
  res.sendStatus(200);
});

// Endpoint to get current tap count
app.get("/taps", (req, res) => {
  res.json({ taps: tapCount });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

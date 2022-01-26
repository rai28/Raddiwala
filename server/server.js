const express = require("express");
const userAuthApis = require("./routes/userControllers/userAuthApis");
const connectDB = require("./db/mongoose");

// MongoDB Connection Fire
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// root route for server
app.get("/", (req, res) => {
  res.send("Raddiwala Server Works!!");
});

// PORT for main server
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on  http://localhost:${PORT}`);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
  });
});

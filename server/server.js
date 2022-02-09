const express = require("express");
const connectDB = require("./db/mongoose");
// routers import
const userRouter = require("./routes/users/userRouter");
const orderRouter = require("./routes/orders/orderRouter");
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

// user routes
app.use("/api/user", userRouter);

// order routes
app.use("/api/order", orderRouter);

// PORT for main server
const PORT = process.env.PORT || 5001;

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

const mongoose = require("mongoose");
const mongoURI =
  require("../config/keys").mongoURI || "mongodb://localhost/raddiwala";
const connectDB = async () => {
  // Create the database connection
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Failed to connect to DB");
      // format the error message
      console.log(`Error Code: ${err.code} and Error Message: ${err.message}`);
    });
};

module.exports = connectDB;

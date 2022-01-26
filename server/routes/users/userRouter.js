const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const expressAsyncHandler = require("express-async-handler");
// DB Config
const JWT_SECRET = require("../../config/keys").jwtSecret;
const User = require("../../models/user");
const generateToken = require("../../middlewares/jwtVerify");
const userSignUpValidator = require("./controller/userSignUpValidator");
const userLoginValidator = require("./controller/userLoginValidator");
const app = express();

const userRouter = express.Router();
//user authentication post routes apis

//post request for registration
userRouter.post(
  "/register",
  userSignUpValidator,
  expressAsyncHandler(async (req, res) => {
    const { name, email } = req.body;
    const password = await bcrypt.hash(req.body.password, 10);
    // try catch block for error handling
    try {
      var createdUser = await User.create({
        name,
        email,
        password,
      });
    } catch (error) {
      // if err.code is 11000 then it means that the email is already registered
      if (error.code === 11000) {
        // duplicate key error
        res.status(400);
        return res.json({ status: 400, message: "Email already in use" });
      }
      throw error;
    }
    // generate token
    const authToken = generateToken(createdUser);
    // send response
    res.json({
      status: "ok",
      data: authToken,
      name: name,
      _id: createdUser._id,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
    });
  })
);

//post request for login
userRouter.post(
  "/login",
  userLoginValidator,
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // try catch block for error handling
    try {
      var user = await User.findOne({ email });
    } catch (error) {
      throw error;
    }
    // if user is not found
    if (!user) {
      return res
        .status(401)
        .json({ status: "error", message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    // if password is not matched
    if (!isMatch) {
      // send status code 401 for unauthorized
      return res
        .status(401)
        .json({ status: "error", message: "Invalid password" });
    }
    // generate token
    const authToken = generateToken(user);
    // send response
    res.json({
      status: "ok",
      data: authToken,
      name: user.name,
      _id: user._id,
      email: user.email,
      isEmployee: user.isEmployee,
    });
  })
);

module.exports = userRouter;

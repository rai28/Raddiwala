const userLoginValidator = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || typeof email !== "string") {
    return res.status(401).json({ status: "error", message: "Invalid email" });
  }
  if (!password || typeof password !== "string") {
    return res
      .status(401)
      .json({ status: "error", message: "Invalid password" });
  }
  next();
};
module.exports = userLoginValidator;

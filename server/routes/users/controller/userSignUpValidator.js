const userSignUpValidator = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!email || typeof email !== "string") {
    return res.status(401).json({ status: "error", message: "Invalid emails" });
  }

  if (!name || typeof name !== "string") {
    return res.status(401).json({ status: "error", message: "Invalid name" });
  }

  if (!password || typeof password !== "string") {
    return res
      .status(401)
      .json({ status: "error", message: "Invalid password" });
  }

  if (password.length < 6) {
    return res
      .status(401)
      .json({ status: "error", message: "Password too short" });
  }
  next();
};

module.exports = userSignUpValidator;

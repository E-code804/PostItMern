const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

const loginUser = async (req, res) => {
  res.json({ message: "Login user" });
};

const signUpUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.signUp(username, password);
    const token = createToken(user._id);

    res.status(200).json({ username, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  loginUser,
  signUpUser,
};

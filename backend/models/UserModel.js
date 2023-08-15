const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signUp = async function (username, password) {
  if (!username || !password) {
    throw new Error("Username and password are required");
  }

  if (!validator.isLength(username, { min: 3, max: 20 })) {
    throw new Error("Username must be between 3 and 20 characters long");
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error(
      "Please have password length of 8, at least 1 lowercase and uppercase letter, at least 1 number, and at least 1 symbol."
    );
  }
  const exists = await this.findOne({ username });

  if (exists) {
    throw new Error("Username already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await this.create({ username, password: hashedPassword });

  return user;
};

module.exports = mongoose.model("User", userSchema);

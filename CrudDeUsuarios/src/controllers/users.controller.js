const catchAsync = require("../utils/catchAsync");
const User = require("../models/usersModel");

exports.createUser = catchAsync(async (req, res, next) => {
  const { name, age, email, password } = req.body;

  const newUser = await User.create({
    name,
    age,
    email,
    password,
  });

  return res.status(200).json({
    status: "success",
    message: "User created successfully",
    data: {
      newUser,
    },
  });
});
exports.getAllProduct = catchAsync(async (req, res, next) => {});
exports.getUser = catchAsync(async (req, res, next) => {});
exports.updateUser = catchAsync(async (req, res, next) => {});
exports.deleteUser = catchAsync(async (req, res, next) => {});

const catchAsync = require("../utils/catchAsync");
const User = require("../models/usersModel");
const AppError = require("../utils/appError");

exports.createUser = catchAsync(async (req, res, next) => {
  const { username, age, email, password } = req.body;

  const newUser = await User.create({
    username: username,
    age: age,
    email: email,
    password: password,
  });

  const userFindInfo = await User.findOne({
    where: {
      email: email,
    },
  });

  if (!userFindInfo) {
    return next(new AppError("User not found", 404));
  }

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

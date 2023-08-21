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
exports.getAllProduct = catchAsync(async (req, res, next) => {
  const allUsers = await User.findAll();

  return res.status(200).json({
    status: "success",
    message: "All users found successfully",
    data: {
      allUsers: allUsers,
      count: allUsers.length,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const findOneUser = await User.findOne({
    id: id,
  });

  return res.status(200).json({
    status: "success",
    message: "User found successfully",
    data: {
      User: findOneUser,
    },
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { username, age, email, password } = req.body;

  const updateDataUser = await User.update({
    id: id,
    username: username,
    age: age,
    email: email,
    password: password,
  });

  return res.status(200).json({
    status: "success",
    message: "User updated successfully",
    data: {
      User: updateDataUser,
    },
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {});

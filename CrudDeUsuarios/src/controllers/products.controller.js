const catchAsync = require("../utils/catchAsync");
const PRODUCT = require("../models/productsModel");
const AppError = require("../utils/appError");

exports.createProduct = catchAsync(async (req, res, next) => {
  const { name, price, description, amount } = req.body;

  const newProduct = await PRODUCT.create({
    name,
    price,
    description,
    amount,
  });

  if (!newProduct) next(new AppError("User not Found", 404));

  res.status(201).json({
    status: "success",
    message: "Product created successfully",
    data: {
      newProduct,
    },
  });
});

exports.allProduct = catchAsync(async (req, res, next) => {
  const allProduct = await PRODUCT.findAll();

  if (allProduct > 0)
    next(new AppError("Product not Found", 404));

  res.status(200).json({
    status: "success",
    message: "All Product",
    allProduct: allProduct.length,
    data: {
      allProduct,
    },
  });
});

exports.getProductForId = catchAsync(async (req, res, next) => {
  const id = req.params;

  const getProductForId = await PRODUCT.findOne({
    where: {
      id,
    },
  });

  if (!getProductForId)
    next(new AppError("Product not Found", 404));

  res.status(200).json({
    status: "success",
    message: "Product",
    data: {
      getProductForId,
    },
  });
});

exports.updateProductForId = catchAsync(
  async (req, res, next) => {
    const id = req.params;
    const { name, price, description, amount } = req.body;

    const updateProductForId = await PRODUCT.update(
      {
        name,
        price,
        description,
        amount,
      },
      {
        where: {
          id,
        },
      }
    );

    if (!updateProductForId)
      next(new AppError("Product not Found", 404));

    res.status(200).json({
      status: "success",
      message: "Product updated successfully",
      data: {
        updateProductForId,
      },
    });
  }
);

exports.deleteProductForId = catchAsync(
  async (req, res, next) => {
    const id = req.params;

    const deleteProductForId = await PRODUCT.destroy({
      where: {
        id,
      },
    });

    if (!deleteProductForId)
      next(new AppError("Product not Found", 404));

    res.status(200).json({
      status: "success",
      message: "Product deleted successfully",
      data: {
        deleteProductForId,
      },
    });
  }
);

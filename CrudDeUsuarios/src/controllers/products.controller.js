const catchAsync = require("../utils/catchAsync");
const PRODUCT = require("../models/productsModel");
const AppError = require("../utils/appError");
const products = require("../models/productsModel");

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
  const { id } = req.params;

  const ProductForId = await PRODUCT.findOne({
    where: {
      id,
    },
  });

  if (!ProductForId)
    next(new AppError("Product not Found", 404));

  res.status(200).json({
    status: "success",
    message: "Product",
    data: {
      ProductForId,
    },
  });
});

exports.updateProductForId = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;
    const { name, price, description, amount } = req.body;

    const updateProduct = await PRODUCT.findOne({
      where: {
        id,
      },
    });

    const updateProductForId = await updateProduct.update({
      name: name,
      price: price,
      description: description,
      amount: amount,
    });

    if (!updateProductForId)
      next(new AppError("Product not Found", 404));

    res.status(200).json({
      status: "success",
      message: "Product updated successfully",
    });
  }
);

exports.deleteProductForId = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;

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

const Product = require("../models/productModel.js");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const createProduct = asyncHandler(async (req, res) => {
     try {

          if (req.body.title) {
               req.body.slug = slugify(req.body.title);
          };

          const createProduct = await Product.create(req.body);
          res.json(createProduct);

     } catch (error) {
          throw new Error(error);
     };
});

const getAllProduct = asyncHandler(async (req, res) => {
     try {

          const findAllProduct = await Product.find();
          res.json(findAllProduct);

     } catch (error) {
          throw new Error(error);
     };
});

const getProduct = asyncHandler(async (req, res) => {
     const { id } = req.params;

     try {

          const findProduct = await Product.findById(id);
          res.json(findProduct);

     } catch (error) {
          throw new Error(error);
     };
});

module.exports = { createProduct, getAllProduct, getProduct };
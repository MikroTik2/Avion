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

       const queryObj = { ...req.query };
       const excludeFields = ["page", "sort", "limit", "fields"];
   
       excludeFields.forEach((el) => delete queryObj[el]);
   
       let queryStr = JSON.stringify(queryObj);
       queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
   
       let query = Product.find(JSON.parse(queryStr));
   
       if (req.query.sort) {
   
         const sortBy = req.query.sort.split(",").join(" ");
         query = query.sort(sortBy);
   
       } else {
          query = query.sort("-createdAt");
       };
   
       if (req.query.fields) {
   
         const fields = req.query.fields.split(",").join(" ");
         query = query.select(fields);
   
       } else {
         query = query.select("-__v");
       }
   
       const page = req.query.page;
       const limit = req.query.limit;
       const skip = (page - 1) * limit;
   
       query = query.skip(skip).limit(limit);
   
       if (req.query.page) {
         const productCount = await Product.countDocuments();
         if (skip >= productCount) throw new Error("This Page does not exists");
       };
   
       const product = await query;
       res.json(product);
       
     } catch (error) {
       throw new Error(error);
     }
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
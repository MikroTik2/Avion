const express = require("express");
const router = express.Router();
const { createProduct, getAllProduct, getProduct } = require("../controllers/productCtrl.js");

// post
router.post("/add", createProduct);

// get
router.get("/all", getAllProduct);
router.get("/:id", getProduct);

// put

// delete

module.exports = router;
const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers");

// @desc GET all products from db
// @route GET /api/products
//@aceess Public
router.get("/", getAllProducts);

// @desc GET all products from db
// @route GET /api/products/:id
//@aceess Public
router.get("/:id", getProductById);

module.exports = router;

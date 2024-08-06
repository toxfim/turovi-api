const express = require('express');
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById
} = require('../controllers/productController');

const router = express.Router();

router.post('/products', createProduct);
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProductById);
router.delete('/products/:id', deleteProductById);

module.exports = router;

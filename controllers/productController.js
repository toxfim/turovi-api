const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const { name, description, price, category } = req.body;
  try {
    const product = new Product({ name, description, price, category });
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({ productId: id });
    if (!product) return res.status(404).send('Product not found');
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateProductById = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const product = await Product.findOneAndUpdate({ productId: id }, updates, { new: true });
    if (!product) return res.status(404).send('Product not found');
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOneAndDelete({ productId: id });
    if (!product) return res.status(404).send('Product not found');
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

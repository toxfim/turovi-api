const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  productId: { type: String, unique: true, default: uuidv4 }
});

// Indeks yaratish
ProductSchema.index({ productId: 1 }, { unique: true });

module.exports = mongoose.model('Product', ProductSchema);

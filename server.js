const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middleware/errorHandler');

// .env faylini o'qish
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// MongoDB ulanishi
connectDB();

// Routes
app.use('/api', productRoutes);

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

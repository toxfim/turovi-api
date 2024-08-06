# E-Commerce API

This is a RESTful API for an e-commerce application built with Node.js, Express.js, and MongoDB. It allows you to manage products with functionalities to create, read, update, and delete products.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, read, update, and delete products
- Unique product IDs using UUID
- Category management for products

## Technologies

- Node.js
- Express.js
- Mongoose (for MongoDB)
- UUID (for unique product IDs)
- dotenv (for environment variables)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ecommerce-api.git
2. Navigate to the project directory:
   ```bash
   cd ecommerce-api
3. Install dependencies
   ```bash
   npm install
4. Create a .env file in the root directory and add your MongoDB connection URI:
   ```env
   MONGO_URI=your_mongodb_connection_uri
   PORT=5000

## Usage
1. Start the server
   ```bash
   npm start
2. The server will run on http://localhost:5000. You can use Postman or any other API client to test the endpoints.

## Endpoints
### Create Product
- POST `/api/products`
- Request Body:
   ```json
   {
      "name": "Product Name",
      "description": "Product Description",
      "price": 100.00,
      "category": "Category Name"
   }
- Respone
   ```
   Product created successfully
   ```
### Get All Products
- GET `api/products`
- Response
   ```json
   [
      {
         "name": "Product Name",
         "description": "Product Description",
         "price": 100.00,
         "category": "Category Name",
         "productId": "unique-product-id"
      }
   ]
### Get Product By Id
- GET `api/products/{id}`
- Response
   ```json
   {
      "name": "Product Name",
      "description": "Product Description",
      "price": 100.00,
      "category": "Category Name",
      "productId": "unique-product-id"
   }

### Udpate Product
- PUT `api/products/{id}`
- Request body
   ```json
   {
      "name": "Updated Product Name",
      "description": "Updated Product Description",
      "price": 150.00,
      "category": "Updated Category Name"
   }
- Response:
   ```json
   {
      "name": "Updated Product Name",
      "description": "Updated Product Description",
      "price": 150.00,
      "category": "Updated Category Name",
      "productId": "unique-product-id"
   }
### Delete Product
- Delete `api/product/{id}`
- Response:
   ```json
   {
      msg: "Product deleted successfully"
   }

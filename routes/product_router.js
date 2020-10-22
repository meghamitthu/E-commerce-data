const express = require('express');
var product_router = express.Router();

const next_product = require('../controller/new_product');
product_router.post('/product/next',next_product.new_product);

const see_product = require('../controller/show_product');
product_router.get('/product/show',see_product.show_product);

module.exports = product_router;
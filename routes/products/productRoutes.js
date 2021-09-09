const express = require('express');
const Products = require('./productModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    Products.getProducts()
        .then(product => {
            res.status(200).json(product);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;
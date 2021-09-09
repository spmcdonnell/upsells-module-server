const express = require('express');
const Config = require('../config/configModel.js');
const Products = require('../products/productModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    let productData, configData, formattedData;

    Products.getProducts()
        .then(product => {
            productData = product[0];

            Config.getConfig()
                .then(config => {
                    configData = config[0];

                    formattedData = {
                        title: productData.title,
                        excerpt: productData.excerpt,
                        imageURL: productData.image_url,
                        productURL: productData.product_url,
                        productID: productData.product_id,
                        styles: {
                            background: {
                                backgroundColor: configData.background_bg_color,
                                borderRadius: configData.background_border_radius
                            },
                            title: {
                                color: configData.title_color
                            },
                            excerpt: {
                                color: configData.excerpt_color
                            },
                            button: {
                                color: configData.button_color,
                                backgroundColor: configData.button_bg_color,
                                borderRadius: configData.button_border_radius
                            }
                        }
                    };

                    res.status(200).json(formattedData);
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        })
        .catch(err => {
            res.status(500).json(err);
        });


});

module.exports = router;
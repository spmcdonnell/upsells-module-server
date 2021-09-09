const express = require('express');
const Config = require('./configModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    Config.getConfig()
        .then(config => {
            res.status(200).json(config);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;
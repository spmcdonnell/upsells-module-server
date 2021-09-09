const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const configRoutes = require('../routes/config/configRoutes.js');
const productRoutes = require('../routes/products/productRoutes.js');
const upsellRoutes = require('../routes/upsell/upsellRoutes.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/config', configRoutes);
server.use('/product', productRoutes);
server.use('/upsell', upsellRoutes);

server.get('/', (req, res) => {
    res.send('API running...');
});

module.exports = server;
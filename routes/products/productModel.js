const db = require('../../database/db-config.js');

module.exports = { getProducts };

function getProducts() {
    return db('products as p')
    .select(
        'p.title', 
        'p.excerpt', 
        'p.product_url', 
        'p.image_url', 
        'p.product_id'
    )
    .where({'p.id': 1})
    .then(product => {
        return product;
    });
    
}
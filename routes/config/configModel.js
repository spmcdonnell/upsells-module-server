const db = require('../../database/db-config.js');

module.exports = { getConfig };

function getConfig() {
    return db('config as c')
    .select(
        'c.background_bg_color', 
        'c.background_border_radius', 
        'c.title_color', 
        'c.excerpt_color', 
        'c.button_color', 
        'c.button_bg_color', 
        'c.button_border_radius'
    )
    .where({'c.id': 1})
    .then(config => {
        return config;
    });
    
}

exports.up = function(knex) {
    return knex.schema
    .createTable('products', table => {
        table.increments();
        table.text('title').notNullable();
        table.text('excerpt').notNullable();
        table.text('product_url').notNullable();
        table.text('image_url').notNullable();
        table.integer('product_id').notNullable();
    })
    .createTable('config', table => {
        table.increments();
        table.text('background_bg_color').notNullable();
        table.text('background_border_radius').notNullable();
        table.text('title_color').notNullable();
        table.text('excerpt_color').notNullable();
        table.text('button_color').notNullable();
        table.text('button_bg_color').notNullable();
        table.text('button_border_radius').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('config')
    .dropTable('products');
};

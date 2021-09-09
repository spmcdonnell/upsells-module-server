
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          title: 'Buttered Popcorn',
          excerpt: 'One of the best reblooming large flowers we’ve grown! Produces masses of brilliant golden yellow blooms.',
          product_url: 'http://www.woocommerce-512284-1800979.cloudwaysapps.com/?add-to-cart=2976',
          image_url: 'https://woocommerce-512284-1800979.cloudwaysapps.com/wp-content/uploads/2014/11/3322-Buttered-Popcorn-01-e1582742952644.jpg',
          product_id: 2976
        }
      ]);
    });
};

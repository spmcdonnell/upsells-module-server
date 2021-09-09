
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('config').del()
    .then(function () {
      // Inserts seed entries
      return knex('config').insert([
        {
          background_bg_color: '#efefef',
          background_border_radius: '30px',
          title_color: '#672496',
          excerpt_color: '#000000',
          button_color: '#ffffff',
          button_bg_color: '#ea5005',
          button_border_radius: '5px'
        }
      ]);
    });
};

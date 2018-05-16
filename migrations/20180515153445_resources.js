
exports.up = function(knex, Promise) {
    return knex.schema.createTable('resources', table => {
        table.increments('id')
        table.string('image1')
        table.string('title')
        table.text('header')
        table.text('subheader')
        table.text('preblurb')
        table.text('blurb')
        table.text('text_extra')
        table.text('text_extra2')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resources')
};


exports.up = function(knex, Promise) {
    return knex.schema.createTable('resources', table => {
        table.increments('id')
        table.string('photo_url')
        table.string('title')
        table.text('header')
        table.text('blurb')
        table.text('text_extra')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resources')
};

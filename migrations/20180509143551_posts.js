
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', table => {
    table.increments('id')
    table.integer('user_id')
    table.string('title')
    table.text('thread_content')
    table.string('photo_url')
    table.boolean('approved')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
};

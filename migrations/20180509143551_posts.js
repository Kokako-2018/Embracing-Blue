
exports.up = function (knex, Promise) {
  return knex.schema.createTable('posts', table => {
    table.increments('id')
    table.integer('user_id')
    table.string('title')
    table.text('thread_content')
    table.string('image_url')
    table.boolean('is_approved').defaultTo(false)
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('posts')
};

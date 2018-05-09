
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table.increments('id')
    table.integer('user_id')
    table.integer('post_id')
    table.text('comment')
    table.boolean('is_approved')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};

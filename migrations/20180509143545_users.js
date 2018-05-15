
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('user_name')
    table.string('preferred_name')
    table.string('email_address')
    table.boolean('is_admin').defaultTo(false)
    table.string('hash')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};

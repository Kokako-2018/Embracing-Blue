
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, user_id: '2', post_id: '1', comment: 'This is where the comment would be', is_approved: 'true'},
        {id: 2, user_id: '3', post_id: '2', comment: 'This is where the comment would be', is_approved: 'true'},
        {id: 3, user_id: '3', post_id: '1', comment: 'This is where the comment would be', is_approved: 'false'}
      ]);
    });
};

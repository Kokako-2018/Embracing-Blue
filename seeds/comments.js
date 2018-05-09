
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, user_id: '2', forum_id: '1', comment: 'This is where the comment would be', approved: 'true'},
        {id: 2, user_id: '3', forum_id: '2', comment: 'This is where the comment would be', approved: 'true'},
        {id: 3, user_id: '3', forum_id: '1', comment: 'This is where the comment would be', approved: 'false'}
      ]);
    });
};

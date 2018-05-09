
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, user_id: '1', thread_content: 'This is where a user would share their experiences', photo_url: '', approved: 'true'},
        {id: 2, user_id: '1', thread_content: 'This is where a user would share their experiences', photo_url: '', approved: 'false'},
        {id: 3, user_id: '2', thread_content: 'This is where a user would share their experiences', photo_url: '', approved: 'true'}
      ]);
    });
};

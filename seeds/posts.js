
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, user_id: '1', title: 'Example Post', thread_content: 'This is where a user would share their experiences. Anyone can view the existing posts but you must be logged in in order to create a post yourself. You can only edit and delete your own post except if you are admin - in which case you have full permissions.', image_url: '', is_approved: true},
        {id: 2, user_id: '1', title: 'Another Example', thread_content: 'This is where a user would share their experiences', image_url: '', is_approved: false},
        {id: 3, user_id: '2', title: 'A Third Example', thread_content: 'This is where a user would share their experiences', image_url: '', is_approved: true}
      ]);
    });
};

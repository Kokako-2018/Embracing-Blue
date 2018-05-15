
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('identities').del()
    .then(function () {
      // Inserts seed entries
      return knex('identities').insert([
        {id: 1, image1:'', title:'', header:'', blurb:'', text_extra:''},
        {id: 2, image1:'', title:'', header:'', blurb:'', text_extra:''},
        {id: 3, image1:'', title:'', header:'', blurb:'', text_extra:''}
      ]);
    });
};

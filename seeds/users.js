
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, user_name: 'taytay', preferred_name: 'Taylor', email_address: 'tay.swiz@mail.box', is_admin: 'false', hash: 'tay4lyf'},
        {id: 2, user_name: 'harry123', preferred_name: 'Harry', email_address: 'harrycat@mail.box', is_admin: 'false', hash: 'hazzaaaa'},
        {id: 3, user_name: 'slothlover56', preferred_name: 'Sally', email_address: 'hellothere@mail.box', is_admin: 'false', hash: 'salzalad' }
      ]);
    });
};

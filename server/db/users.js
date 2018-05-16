var hash = require('../auth/hash')

function createUser(user_name, password, db) {
  return new Promise((resolve, reject) => {
    hash.generate(password, (err, hash) => {
      if (err) reject(err)
      const is_admin = password == process.env.ADMIN_SECRET
      db('users')
        .insert({ user_name, hash, is_admin }, 'id')
        .then(user_id => resolve(user_id))
        .catch(err => reject(err))
    })
  })
}

function userExists(user_name, db) {
  return db('users')
    .where('user_name', user_name)
    .first()
}

function getUserByName(user_name, db) {
  return db('users')
    .where('user_name', user_name)
    .first()
}

module.exports = {
  createUser,
  userExists,
  getUserByName
}

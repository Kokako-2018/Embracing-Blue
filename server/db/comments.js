var Knex = require('knex')
var config = require('../../knexfile')[process.env.NODE_ENV || 'development']
var db = Knex(config)


function getComments(testDb) {
  const conn = testDb || db
  return conn('comments')
    .where('is_apporoved', true)
    .select()
}


function addComment(comment, testDb) {
  const conn = testDb || db
  return conn('comments')
    .where('is_approved', true)
    .insert(comment)
    .then(id => {
      return conn('comments')
        .where({id: id[0]})
    })
}


function editComment(id, commentData, testDb) {
  const conn = testDb || db
  return conn('comments')
    .where('id'. id)
    .update({'comment': commentData.comment})
}


function deleteComment(id, testDb) {
  const conn = testDb || db
  return conn('comments')
    .where('id'. id)
    .del()
}


module.exports = {
  getComments,
  addComment,
  editComment,
  deleteComment
}
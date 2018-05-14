var Knex = require('knex')
var config = require('../../knexfile')[process.env.NODE_ENV || 'development']
var db = Knex(config)


function getComments(post_id, testDb) {
  const conn = testDb || db
  return conn('comments')
    .where({post_id})
    // .where({post_id, is_approved: true})
    .select()
}


function addComment(comment, testDb) {
  const conn = testDb || db
  return conn('comments')
    .insert(comment, 'id')
    .then(id => {
      return conn('comments')
        .where({id: id[0]})
        .first()
    })
}


function editComment(id, commentData, testDb) {
  const conn = testDb || db
  return conn('comments')
    .where('id', id)
    .update({'comment': commentData.comment})
}


function deleteComment(id, testDb) {
  const conn = testDb || db
  console.log('this is the ', id)
  return conn('comments')
    .where('id', id)
    .del()
}


module.exports = {
  getComments,
  addComment,
  editComment,
  deleteComment
}

var Knex = require ('knex')
var config = require ('../../knexfile')[process.env.NODE_ENV || 'development']
var db = Knex(config)



function getAllPosts() {  //selecting all posts from 'posts' table
  const conn = db    //where they have been 
  return conn('posts')   
    // .where('is_approved', true)
    .select()
}


function addPost (post, testDb) {
  const conn = testDb || db
  return conn('posts')            //adding post to 'posts' table
    .insert(post)   
    .then(id => {
      return conn('posts')     //matches id comlumn with id
        .where({id: id[0]})
        .first()
    })
}


function editPost (id, postData, testDb) {
  const conn = testDb || db //passing in id and data attached to post
  return conn('posts')
    .where('id', id) //matching id param with id in table column
    .update({'title': postData.title, //updates follwing collumns
             'thread_content': postData.thread_content,
             'image_url': postData.image_url
    })
}


function deletePost (id, testDb) {
  const conn = testDb || db
  return conn('posts')
    .where('id', id) //deleting post from table where id
    .del()           //selected by user matches one in table
}


module.exports = {
  getAllPosts,
  addPost,
  editPost,
  deletePost
}
import request from 'superagent'

import authRequest from '../utils/api'


export const receiveAllPosts = (posts) => {
  return {
    type: 'RECEIVE_ALL_POSTS',
    posts
  }
}

export const addPostAction = (post) => {
  return {
    type: 'ADD_POST',
    post
  }
}


export const editPostAction = (id, post) => {
  return {
    type: 'EDIT_POST',
    id,
    post
  }
}

export const deletePostAction = (id) => {
  return {
    type: 'DELETE_POST',
    id
  }
}



export function apiGetAllPosts () {
  return (dispatch) => {
    request
      .get(`/api/posts`) //this is where we are sending the request to db
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
         dispatch(receiveAllPosts(res.body)) // dispatches an action object - which will receive
      })                                    // the res.body of all the posts
  }
}



export function apiAddPost (post, cb) { //cb = callback
  return (dispatch) => {
    authRequest('post', 'posts', post) //1st param = method, 2nd=end route, 3rd = data
      .then(res => {
        dispatch(addPostAction(res.body))
        cb(!err)                        //callback if no error
      })
      .catch(err => {
        console.error(err.message)
      })
  }
}

export function apiEditPost (id, post) {
  return (dispatch) => {
    authRequest('put', `posts/${id}`, post) //1st param = method, 2nd=end route, 3rd = data
      .then(res => {
        dispatch(editPostAction(id, post))
      })
      .catch(err => {
        console.error(err.message)
      })
  }
}

export function apiDeletePost (id) {
  return (dispatch) => {
    authRequest('delete', `posts/${id}`) //1st param = method, 2nd=end route)
      .then(res => {
        dispatch(deletePostAction(id))
      })
      .catch(err => {
        console.error(err.message) 
      })
  }
}

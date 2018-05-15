import request from 'superagent'

import authRequest from '../utils/api'


export const recieveAllComments = (comments) => {
  return {
    type: 'RECEIVE_ALL_COMMENTS',
    comments
  }
}

export const addCommentAction = (comment) => {
  return {
    type: 'ADD_COMMENT',
    comment
  }
}

export const editCommentAction = (id, comment) => {
  return {
    type: 'EDIT_COMMENT',
    id,
    comment
  }
}

export const deleteCommentAction = (id) => {
  return {
    type: 'DELETE_COMMENT',
    id
  }
}



export function apiGetAllComments (id, cb) {
  console.log(id)
  // return (dispatch) => {
    request
      .get(`/api/posts/${id}/`) //this is where we are sending the request to
      .end(cb)                            // the res.body of all the comments
  // }
}

export function apiAddComment (id, comment, cb) {
  return (dispatch) => {
    authRequest('post', `posts/${id}`, comment)
      .then(res => {
        dispatch(addCommentAction(res.body))
        cb(!err)
      })
      .catch(err => {
        console.log(err.message)
     })
  }
}

export function apiEditComment (id, comment) {
  return (dispatch) => {
    authRequest('put', `posts/${id}/comments/${comment.id}`, comment)
      .then(res => {
        dispatch(editCommentAction(res.body))
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}

export function apiDeleteComment (postId, commentId, cb) {
  return (dispatch) => {
    authRequest('delete', `posts/${postId}/comments/${commentId}`)
      .then(res => {
        cb(!err)
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}
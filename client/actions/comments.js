import request from 'superagent'

export const recieveAllComments = (comments) => {
  return {
    type: 'RECEIVE_ALL_COMMENTS',
    comments
  }
}

export const addCommentAction = (comment) => {
  return {
    type: 'ADD_COMMENT',
    comments
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
  // return (dispatch) => {
    request
      .get(`/api/posts/${id}/comments`) //this is where we are sending the request to
      .end(cb)                            // the res.body of all the comments
  // }
}


export function apiAddComment (id, comment) {
  return (dispatch) => {
    request
      .post(`/api/posts/${id}/comments`) //passing in req.params.id--$(id)
      .send(comment)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(addComment(res.body))
      })
  }
}

export function apiEditComment (id, comment) {
  return (dispatch) => {
    request
      .put(`/api/posts/${id}/comments/${comment.id}`)
      .send(comment)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(editComment(res.body))
      })
  }
}

export function apiDeleteComment (id, comment) {
  return (dispatch) => {
    request
      .delete(`/api/posts/${id}/comments/${comment.id}`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(deleteComment(res.body))
      })
  }
}
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
        dispatch(addCommentAction(res.body))
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
        dispatch(editCommentAction(res.body))
      })
  }
}

export function apiDeleteComment (postId, commentId, cb) {
  return (dispatch) => {
    console.log({commentId})
    request
      .delete(`/api/posts/${postId}/comments/${commentId}`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        cb(err)
        // dispatch(deleteCommentAction(commentId))
      })
  }
}
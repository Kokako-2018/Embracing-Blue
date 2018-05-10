import request from 'superagent'

export function apiGetAllComments (id) {
  return (dispatch) => {
    request
      .get(`/api/posts/${id}/comments`) //this is where we are sending the request to
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveComments(res.body)) // dispatches an action object - which will receive
      })                                    // the res.body of all the comments
  }
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
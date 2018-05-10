import request from 'superagent'



export function apiGetAllPosts () {
  return (dispatch) => {
    request
      .get(`/api/posts`) //this is where we are sending the request to
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveAllPosts(res.body)) // dispatches an action object - which will receive
      })                                    // the res.body of all the posts
  }
}


export function apiAddPost (post) {
  return (dispatch) => {
    request
      .post(`/api/posts`)
      .send(post)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(addPost(res.body))
      })
  }
}

export function apiEditPost (id, post) {
  return (dispatch) => {
    request
      .put(`/api/posts/${id}`)
      .send(post)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(editPost(res.body))
      })
  }
}

export function apiDeletePost (id) {
  return (dispatch) => {
    request
      .delete(`/api/posts/${id}`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(deletePost(res.body))
      })
  }
}
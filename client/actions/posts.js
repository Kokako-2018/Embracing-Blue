import request from 'superagent'



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
        dispatch(addPostAction(res.body))
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
        dispatch(editPostAction(res.body))
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
        dispatch(deletePostAction(res.body))
      })
  }
}
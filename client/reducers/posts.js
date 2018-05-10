function postsReducer (state = [], action) {

  let newState = [...state]

  switch (action.type) {

    case 'RECEIVE_ALL_POSTS':
      return [...action.posts]

    case 'ADD_POST':
      return [...newState, action.post]

    case 'EDIT_POST':
      let edited = newState.find(post => post.id == action.id)
      edited.post = action.post
      return newState

    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.id)

    default:
      return state

  }

}

export default postsReducer
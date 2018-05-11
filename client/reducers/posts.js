function posts (state = [], action) {

  let newState = [...state]

  switch (action.type) {

    case 'RECEIVE_ALL_POSTS':
      return [...action.posts]

    case 'ADD_POST':
      return [...newState, action.post]

    case 'EDIT_POST':
      let idx = newState.findIndex(post => post.id == action.id)
      newState[idx] = action.newPost
      return newState

    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.id)

    default:
      return state

  }

}

export default posts
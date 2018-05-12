function comments (state = [], action) {

    let newState = [...state]
  
    switch (action.type) {
  
      case 'RECEIVE_ALL_COMMENTS':
        return [...action.comments]
  
      case 'ADD_COMMENT':
        return [...newState, action.comment]
  
      case 'EDIT_COMMENT':
        let idx = newState.findIndex(comment => comment.id == action.id)
        newState[idx] = action.comment
        return newState
  
      case 'DELETE_COMMENT':
        return [...newState].filter((comment) => comment.id != action.id)
        // return state.filter((post) => post.id !== action.id)
  
      default:
        return state
  
    }
  
  }
  
  export default comments
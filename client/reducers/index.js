import {combineReducers} from 'redux'
 

export default combineReducers({
    reducer: (state = [], action) => {
        switch(action.type) {
            default: return state
        }
    }
})

import { combineReducers } from 'redux'

import posts from './posts'
import auth from './auth'
import resourcePage from './resourcePage'
import identitiesPage from './identitiesPage'



export default combineReducers({
    posts,
    auth,
    identitiesPage,
    resourcePage
})

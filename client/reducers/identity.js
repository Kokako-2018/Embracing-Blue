function identityReducer(state = 'menu', action) {

    switch (action.type) {

        case 'VIEW_IDENTITY':
            return action.identity

        case 'DISPLAY_IDENTITIES':
            return 'menu'


        default:
            return state

    }

}

export default identityReducer
function resourcesReducer(state = 'menu', action) {

    switch (action.type) {

        case 'VIEW_RESOURCE':
            return action.resource

        case 'DISPLAY_RESOURCES':
            return 'menu'


        default:
            return state

    }

}

export default resourcesReducer
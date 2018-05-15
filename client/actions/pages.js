import request from 'superagent'
import authRequest from '../utils/api'



export const receivePageAction = (page) => {
    return {
        type: 'RECEIVE_PAGE',
        page
    }
}


export const editPageAction = (page) => {
    return {
        type: 'EDIT_PAGE',
        page
    }
}


export function apiGetResourcesPage(page) {
    return (dispatch) => {
        request
            .get(`/api/${page.title}`)
            .end((err, res) => {
                if (err) {
                    console.error(err.message)
                    return
                }
                dispatch(receivePageAction(res.body))
            })
    }
}


export function apiEditResourcesPage(page) {
    return(dispatch) => {
        authRequest('put', `${page.title}`, page)
            .then(res => {
                dispatch(editPageAction(page))
            })
            .catch(err => {
                console.error(err.message)
            })
    }
}


export function apiGetIdentitiesPage(page) {
    return (dispatch) => {
        request
            .get(`/api/${page.title}`)
            .end((err, res) => {
                if (err) {
                    console.error(err.message)
                    return
                }
                dispatch(receivePageAction(res.body))
            })
    }
}


export function apiEditIdentitiesPage(page) {
    return(dispatch) => {
        authRequest('put', `${page.title}`, page)
            .then(res => {
                dispatch(editPageAction(page))
            })
            .catch(err => {
                console.error(err.message)
            })
    }
}

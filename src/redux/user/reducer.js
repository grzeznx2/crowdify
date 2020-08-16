import types from './types'

const initialState = {
    currentUser: null
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}
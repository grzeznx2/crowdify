import types from './types'

const initialState = {
    mounted: false,
    text: '',
    messageType: ''
}

export default function flashMessageReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_FLASH_MESSAGE:
            return {
                ...state,
                mounted: true,
                text: action.text,
                messageType: action.messageType
            }
        default:
            return state
    }
}
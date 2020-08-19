import types from './types'

export const setFlashMessage = (messageType, text) => ({
    type: types.SET_FLASH_MESSAGE,
    messageType,
    text
})
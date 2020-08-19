import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/reducer'
import flashMessageReducer from './flashMessage/reducer'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['flashMessage']
}

const rootReducer = combineReducers({
    user: userReducer,
    flashMessage: flashMessageReducer,
})

export default persistReducer(persistConfig, rootReducer)
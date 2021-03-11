import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import commentsRatesReducer from './commentsRates/reducer'
import userReducer from './user/reducer'
import projectReducer from './project/reducer'
import flashMessageReducer from './flashMessage/reducer'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['flashMessage', 'commentsRates'],
}

const commentsRatesPersistConfig = {
  key: 'commentsRates',
  storage,
  blacklist: ['isLoading', 'error'],
}

const rootReducer = combineReducers({
  commentsRates: persistReducer(commentsRatesPersistConfig, commentsRatesReducer),
  user: userReducer,
  project: projectReducer,
  flashMessage: flashMessageReducer,
})

export default persistReducer(persistConfig, rootReducer)

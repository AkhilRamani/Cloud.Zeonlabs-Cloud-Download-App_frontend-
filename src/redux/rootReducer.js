import {combineReducers} from 'redux'
import {fileReducer} from './reducers/file.reducer'
import {userReducer} from './reducers/user.reducer'
import {LOGOUT} from './actions/types'

const appReducer = combineReducers({
  files: fileReducer,
  user: userReducer
})

export const rootReducer = (state, action) => {
  if(action.type === LOGOUT){
      state = undefined
  }

  return appReducer(state, action)
}
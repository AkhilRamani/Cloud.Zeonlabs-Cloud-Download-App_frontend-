import {combineReducers} from 'redux'
import {fileReducer} from './reducers/file.reducer'
import {LOGOUT} from './actions/types'

const appReducer = combineReducers({
  files: fileReducer
})

export const rootReducer = (state, action) => {
  if(action.type === LOGOUT){
      state = undefined
  }

  return appReducer(state, action)
}
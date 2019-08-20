import {combineReducers} from 'redux'
import {fileReducer} from './reducers/file.reducer'

const appReducer = combineReducers({
  files: fileReducer
})

export const rootReducer = (state, action) => {
  if(action.type === 'LOG_OUT'){
      state = undefined
  }

  return appReducer(state, action)
}
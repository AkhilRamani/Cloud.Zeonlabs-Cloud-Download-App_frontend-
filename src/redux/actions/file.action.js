import {ADD_FILE, DELETE_FILE, CHANGE_FILE_STATUS} from './types'

export const addFile = file => ({
  type: ADD_FILE, file
});

export const deleteFile = _id => ({
  type: DELETE_FILE, _id
})

export const changeFileStatus = _id => ({
  type: CHANGE_FILE_STATUS, _id
})
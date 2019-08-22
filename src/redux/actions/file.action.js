import {ADD_FILE, DELETE_FILE, CHANGE_FILE_STATUS, RENAME_FILE} from './types'

export const addFile = file => ({
  type: ADD_FILE, file
});

export const deleteFile = _id => ({
  type: DELETE_FILE, _id
})

export const changeFileStatus = _id => ({
  type: CHANGE_FILE_STATUS, _id
})

export const renameFile = (_id, name) => ({
  type: RENAME_FILE, payload: {_id, name}
})
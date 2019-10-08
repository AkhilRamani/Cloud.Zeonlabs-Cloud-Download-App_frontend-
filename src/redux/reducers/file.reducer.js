import {ADD_FILE, DELETE_FILE, CHANGE_FILE_STATUS, RENAME_FILE} from '../actions/types'
import _ from 'lodash'

import {fileStatus} from '../../common/constants'

const initialState = {
  files: [
	  {
    _id: 1,
    name: 'Genius season1-episode4.mp4',
    createdAt: '2019-08-12T16:55:24.747Z',
	size: '43546535',
	type: 'a/eps',
    status: 'done'
  },
  {
    _id: 3,
    name: 'Old town road remix.mp3',
    createdAt: '2019-06-10T17:23:59.388Z',
	size: '234556',
	type:'a/7zip',
    status: 'done'
  },
  {
    _id: 4,
    name: 'Buildbox_full-primium.zip',
    createdAt: '2019-06-04T13:38:17.804Z',
	size: '457768764',
	type:'a/max',
    status: 'done'
  },
  {
    _id: 5,
    name: 'Image 66479x luxury-4rt_45Q.png',
    createdAt: '2019-01-04T13:38:17.804Z',
	size: '984255',
	type:'a/3ds',
    status: 'done'
  },
  {
    _id: 6,
    name: 'Audio-4rt_45Q.png',
    createdAt: '2019-01-04T13:38:17.804Z',
	size: '984255',
	type:'a/mp3',
    status: 'done'
  },
  {
    _id: 7,
    name: 'Zeonlabs presentation.ppt',
    createdAt: '2019-01-04T13:38:17.804Z',
	size: '984255',
	type:'a/psd',
    status: 'done'
  },
  {
    _id: 8,
    name: 'Zeonlabs presentation.ppt',
    createdAt: '2019-01-04T13:38:17.804Z',
	size: '984255',
	type:'a/apk',
    status: 'done'
  },
  {
    _id: 9,
    name: 'Zeonlabs presentation.ppt',
    createdAt: '2019-01-04T13:38:17.804Z',
	size: '984255',
	type:'a/js',
    status: 'done'
  }
  ],
};

export const  fileReducer = (state = initialState, action) => {
    switch (action.type) {
		case ADD_FILE:
			return { ...state, files: [action.file, ...state.files] };

		case DELETE_FILE:
			return {
				...state,
				files: _.remove(state.files, (file) => file._id !== action._id)
			}

		case CHANGE_FILE_STATUS:{
			const index = _.findIndex(state.files, {_id: action._id})
			var updatedFile = state.files[index];
			updatedFile.status = fileStatus.DONE

			return {
				...state,
				files: [
					...state.files.slice(0, index),
					updatedFile,
					...state.files.slice(index + 1)
				]
			}}
		
		case RENAME_FILE:
			const index = _.findIndex(state.files, {_id: action.payload._id})
			var file = state.files[index]
			file.name = action.payload.name

			return {
				...state,
				files: [
					...state.files.slice(0, index),
					file,
					...state.files.slice(index + 1)
				]
			}

		default:
			return state;
    }
};



//============> dummy data
// {
//     _id: 1,
//     name: 'Genius season1-episode4.mp4',
//     createdAt: '2019-08-12T16:55:24.747Z',
//     size: '43546535',
//     status: 'uploading'
//   },
//   {
//     _id: 3,
//     name: 'Old town road remix.mp3',
//     createdAt: '2019-06-10T17:23:59.388Z',
//     size: '234556',
//     status: 'done'
//   },
//   {
//     _id: 4,
//     name: 'Buildbox_full-primium.zip',
//     createdAt: '2019-06-04T13:38:17.804Z',
//     size: '457768764',
//     status: 'done'
//   },
//   {
//     _id: 5,
//     name: 'Image 66479x luxury-4rt_45Q.png',
//     createdAt: '2019-01-04T13:38:17.804Z',
//     size: '984255',
//     status: 'done'
//   }
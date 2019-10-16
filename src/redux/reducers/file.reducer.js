import {ADD_FILE, DELETE_FILE, CHANGE_FILE_STATUS, RENAME_FILE} from '../actions/types'
import _ from 'lodash'

const initialState = {
  files: [
	  {
      _id: 1,
      name: 'Genius season1-episode4.mp4',
      createdAt: '2019-08-12T16:55:24.747Z',
      size: '43546535',
      type: 'a/mp4',
      status: 'failed'
  },
  {
    _id: 3,
    name: 'Old town road remix.rar',
    createdAt: '2019-06-10T17:23:59.388Z',
	size: '234556',
	type:'a/rar',
    status: 'done'
  },
  // {
  //   _id: 4,
  //   name: 'Buildbox_full-primium.max',
  //   createdAt: '2019-06-04T13:38:17.804Z',
	// size: '457768764',
	// type:'a/max',
  //   status: 'done'
  // },
  // {
  //   _id: 5,
  //   name: 'zeonlabs-documentation-4rt_45Q.pdf',
  //   createdAt: '2019-01-04T13:38:17.804Z',
	// size: '984255',
	// type:'a/pdf',
  //   status: 'done'
  // },
  // {
  //   _id: 6,
  //   name: 'Audio-4rt_45Q.mp3',
  //   createdAt: '2019-01-04T13:38:17.804Z',
	// size: '984255',
	// type:'a/mp3',
  //   status: 'done'
  // },
  // {
  //   _id: 7,
  //   name: 'Zeonlabs presentation.ttf',
  //   createdAt: '2019-01-04T13:38:17.804Z',
	// size: '984255',
	// type:'a/ttf',
  //   status: 'done'
  // },
  // {
  //   _id: 8,
  //   name: 'Zeonlabs-mobile.apk',
  //   createdAt: '2019-01-04T13:38:17.804Z',
  //   size: '984255',
  //   type:'a/apk',
  //   status: 'done'
  // },
  // {
  //   _id: 9,
  //   name: 'Zeonlabs presentation.iso',
  //   createdAt: '2019-01-04T13:38:17.804Z',
  //   size: '984255',
  //   type:'as/iso',
  //   status: 'done'
  // },
  // {
  //   _id: 10,
  //   name: 'msi-zeon procedure.bat',
  //   createdAt: '2019-01-04T13:38:17.804Z',
  //   size: '984255',
  //   type:'as/bat',
  //   status: 'done'
  // },
  // {
  //   _id: 11,
  //   name: 'logo_zeonlabs_vector.eps',
  //   createdAt: '2019-01-04T13:38:17.804Z',
  //   size: '984255',
  //   type:'as/eps',
  //   status: 'done'
  // },
  // {
  //   _id: 12,
  //   name: 'Zeonlabs presentation.ppt',
  //   createdAt: '2019-01-04T13:38:17.804Z',
  //   size: '984255',
  //   type:'as/ppt',
  //   status: 'done'
  // },
  // {
  //   _id: 13,
  //   name: 'project-report_v2.1.doc',
  //   createdAt: '2019-01-04T13:38:17.804Z',
  //   size: '984278',
  //   type:'as/doc',
  //   status: 'done'
  // },
  // {
  //   _id: 14,
  //   name: 'spreadsheet_keywords.xls',
  //   createdAt: '2019-01-04T13:38:17.804Z',
  //   size: '184255',
  //   type:'as/xls',
  //   status: 'done'
  // },
  // {
  //   _id: 15,
  //   name: 'root_mutation.controller.java',
  //   createdAt: '2019-05-04T13:38:17.804Z',
  //   size: '384215',
  //   type:'as/java',
  //   status: 'done'
  // }
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
			const index = _.findIndex(state.files, {_id: action.payload._id})
			var updatedFile = state.files[index];
			// updatedFile.status = fileStatus.DONE
			updatedFile.status = action.payload.status

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
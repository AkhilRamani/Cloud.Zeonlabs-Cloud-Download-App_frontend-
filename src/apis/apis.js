import axios from 'axios'
import {serverUrl} from '../common/constants'

export const uploadFile = (url) => {
    return axios.post(`${serverUrl}/upload`, {url})
}

export const getAllFiles = () => {
    return axios.get(`${serverUrl}/file/all`)
}

export const deleteFile = (fileId) => {
    return axios.delete(`${serverUrl}/file/delete/${fileId}`)
}

export const renameFile = (fileId, name) => {
    return axios.patch(`${serverUrl}/file/rename/${fileId}`, {name})
}

export const downloadFile = fileId => {
    return axios.get(`${serverUrl}/file/download/${fileId}`)
}
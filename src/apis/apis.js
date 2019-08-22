import axios from 'axios'
import server_url from './config'

export const uploadFile = (url) => {
    return axios.post(`${server_url}/upload`, {url})
}

export const getAllFiles = () => {
    return axios.get(`${server_url}/file/all`)
}

export const deleteFile = (fileId) => {
    return axios.delete(`${server_url}/file/delete/${fileId}`)
}

export const renameFile = (fileId, name) => {
    return axios.patch(`${server_url}/file/rename/${fileId}`, {name})
}

export const downloadFile = fileId => {
    return axios.get(`${server_url}/file/download/${fileId}`)
}
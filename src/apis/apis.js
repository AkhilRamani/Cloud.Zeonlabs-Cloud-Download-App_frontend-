import axios from 'axios'
import {serverUrl} from '../common/constants'
import {getToken} from '../common/common.utils'

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

export const createUser = data => {
    return axios.post(`${serverUrl}/signup`, data)
}

export const loginUser = data => {
    return axios.post(`${serverUrl}/login`, data)
}

export const logoutUser = async () => {
    const token = await getToken()
    return axios.delete(`${serverUrl}/logout`, {headers: { 'x-auth': token }})
}
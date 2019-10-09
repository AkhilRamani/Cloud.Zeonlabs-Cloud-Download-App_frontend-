import axios from 'axios'
import {serverUrl} from '../common/constants'
import {getToken} from '../common/common.utils'
import {X_AUTH} from './config'

export const uploadFile = async (url) => {
    const token = await getToken()
    return axios.post(`${serverUrl}/upload`, {url}, {headers: {[X_AUTH]: token}})
}

export const getFile = fileId => axios.get(`${serverUrl}/file/${fileId}`)

export const getAllFiles = async () => {
    const token = await getToken()
    return axios.get(`${serverUrl}/file/all`, {headers: {[X_AUTH]: token}})
}

export const deleteFile = async (fileId) => {
    const token = await getToken()
    return axios.delete(`${serverUrl}/file/delete/${fileId}`, {headers: {[X_AUTH]: token}})
}

export const renameFile = async (fileId, name) => {
    const token = await getToken()
    return axios.patch(`${serverUrl}/file/rename/${fileId}`, {name}, {headers: {[X_AUTH]: token}})
}

export const downloadFile = fileId => {
    return axios.get(`${serverUrl}/file/download/${fileId}`)
}

export const createUser = data => {
    return axios.post(`${serverUrl}/signup`, data)
}

export const activateUser = uuid => {
    return axios.post(`${serverUrl}/activate/me`, {uuid})
}

export const loginUser = data => {
    return axios.post(`${serverUrl}/login`, data)
}

export const logoutUser = async () => {
    const token = await getToken()
    return axios.delete(`${serverUrl}/logout`, {headers: { 'x-auth': token }})
}

export const getUserProfile = async () => {
    const token = await getToken()
    return axios.get(`${serverUrl}/me`, { headers: { [X_AUTH]: token } })
}

export const forgotPasswordReq = (email) => {
    return axios.post(`${serverUrl}/forgot/pass`, {email})
}

export const resetPassword = (uuid, password) => {
    return axios.patch(`${serverUrl}/reset/pass`, {uuid, password})
}

export const updateProfile = (fileData) => {
    const token = getToken()
    return axios.post(`${serverUrl}/update/me`, fileData, {
        headers: {[X_AUTH]: token,
        'content-type': 'multipart/form-data'
    }})
}

export const avatarUrl = userId => `${serverUrl}/avatar/${userId}`
export const fetchAvatar = userId => {
    return axios.get(`${serverUrl}/avatar/${userId}`, {responseType: 'blob'})
}

export const updatePassword = (old_password, password) => {
    const token = getToken()
    return axios.patch(`${serverUrl}/update/pass`, {old_password, password}, {headers: {[X_AUTH]: token}})
}
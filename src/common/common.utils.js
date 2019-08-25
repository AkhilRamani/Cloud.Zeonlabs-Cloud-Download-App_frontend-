import {LOCAL_STORAGE_LABLES} from './constants'

const storeToken = token => localStorage.setItem(LOCAL_STORAGE_LABLES.TOKEN, token)
const getToken = () => localStorage.getItem(LOCAL_STORAGE_LABLES.TOKEN)
const clearToken = () => localStorage.removeItem(LOCAL_STORAGE_LABLES.TOKEN)

export {
    storeToken,
    getToken,
    clearToken
}
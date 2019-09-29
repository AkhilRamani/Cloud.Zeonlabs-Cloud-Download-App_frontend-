import {LOCAL_STORAGE_LABLES} from './constants'
import { fetchAvatar, avatarUrl } from '../apis/apis'
import { store } from '../redux/Store'
import { saveAvatarUrl } from '../redux/actions/user.actions'

const storeToken = token => localStorage.setItem(LOCAL_STORAGE_LABLES.TOKEN, token)
const getToken = () => localStorage.getItem(LOCAL_STORAGE_LABLES.TOKEN)
const clearToken = () => localStorage.removeItem(LOCAL_STORAGE_LABLES.TOKEN)
const clearLocalStorage = () => localStorage.clear()

const convertToBase64 = data => {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
        reader.readAsDataURL(data)
    })
}

const fetchAndStoreAvatar = async userId => {
    try{
        const res = await fetchAvatar(userId)
        const imgConverted = await convertToBase64(res.data)
        localStorage && localStorage.setItem('avatar', imgConverted)
        store.dispatch(saveAvatarUrl(imgConverted))
        return true
    }
    catch(e){
        console.log(e)
        return false
    }
}

const getAvatarUrl = userId => localStorage ? localStorage.getItem('avatar') : avatarUrl(userId)

export {
    storeToken,
    getToken,
    clearToken,
    clearLocalStorage,
    fetchAndStoreAvatar,
    getAvatarUrl
}
import Resizer from 'react-image-file-resizer'

import {LOCAL_STORAGE_LABLES} from './constants'
import { fetchAvatar, avatarUrl } from '../apis/apis'
import { store } from '../redux/Store'
import { saveAvatarUrl } from '../redux/actions/user.actions'

const storeToken = token => localStorage.setItem(LOCAL_STORAGE_LABLES.TOKEN, token)
const getToken = () => localStorage.getItem(LOCAL_STORAGE_LABLES.TOKEN)
const clearToken = () => localStorage.removeItem(LOCAL_STORAGE_LABLES.TOKEN)
const clearLocalStorage = () => localStorage.clear()

const isValidUrl = url =>{
    const res = url.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/g)
    return res ? true : false
}

const getFileSharingUrl = fileId => `https://cloud.zeonlabs.co/file=share/${fileId}`

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
function formatBytes(a,b){if(0===a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]}

const resizeImage = (file, callback) => {
    Resizer.imageFileResizer(file, 200, 200, 'JPEG', 100, 0,
        blob => {
            const resizedImage = new File([blob], 'convertedImage.jpeg', {
                type: 'image/jpeg',
                lastModified: Date.now()
            })
            callback(resizedImage)
        },
        'blob'
    )
}

const getPlanTitle = planId => {
    switch(planId){
        case 0: return 'Free Sandbox'
        case 1: return 'Professional'
        default: return null
    }
}

export {
    storeToken,
    getToken,
    clearToken,
    isValidUrl,
    getFileSharingUrl,
    clearLocalStorage,
    fetchAndStoreAvatar,
    getAvatarUrl,
    formatBytes,
    resizeImage,
    getPlanTitle
}
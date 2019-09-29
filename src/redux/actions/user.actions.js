import {LOGOUT, STORE_USER, INCREASE_USED_SPACE, DECREASE_USED_SPACE, UPDATE_USER, SAVE_AVATAR_URL} from './types'

export const logout_redux = () => ({
    type: LOGOUT
})

export const storeUser_redux = user => ({
    type: STORE_USER, user
})

export const increaseUsedSpace = fileSize => ({
    type: INCREASE_USED_SPACE, payload: fileSize
})

export const decreaseUsedSpace = fileSize => ({
    type: DECREASE_USED_SPACE, payload: fileSize
})

export const updateUser = pInfo => ({
    type: UPDATE_USER, payload: pInfo
})

export const saveAvatarUrl = url => ({
    type: SAVE_AVATAR_URL, payload: url
})
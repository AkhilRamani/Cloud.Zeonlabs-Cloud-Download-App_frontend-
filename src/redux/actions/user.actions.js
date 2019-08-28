import {LOGOUT, STORE_USER, INCREASE_USED_SPACE, DECREASE_USED_SPACE} from './types'

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
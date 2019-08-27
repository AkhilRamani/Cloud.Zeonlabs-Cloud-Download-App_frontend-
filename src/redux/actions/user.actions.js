import {LOGOUT, STORE_USER} from './types'

export const logout_redux = () => ({
    type: LOGOUT
})

export const storeUser_redux = user => ({
    type: STORE_USER, user
})
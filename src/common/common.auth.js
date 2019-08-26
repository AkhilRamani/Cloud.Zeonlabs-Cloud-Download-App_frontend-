import {getToken} from './common.utils'

const isAuthenticated = () => {
    return getToken() ? true : false
}

export {
    isAuthenticated
}
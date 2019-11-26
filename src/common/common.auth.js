import {isJWT} from 'validator'
import {getToken} from './common.utils'

const isAuthenticated = () => {
    const token = getToken()
    return token ? isJWT(token) ? true : false
                 : false
}

export {
    isAuthenticated
}
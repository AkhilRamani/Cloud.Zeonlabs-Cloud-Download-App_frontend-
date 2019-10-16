import {getUserProfile} from './apis'
import { fetchAndStoreAvatar, getToken } from '../common/common.utils'
import { socketFileStatusListener } from './socket/socket.listener'
import { store } from '../redux/Store'
import { storeUser_redux } from '../redux/actions/user.actions'

/**
 * called from App.js, Login and ActivateAccount components
 */
export const fetchProfile = async () => {
    if(!getToken()) return null

    try{
        const res = await getUserProfile()
        res.data.avatar && fetchAndStoreAvatar(res.data._id)
        store.dispatch(storeUser_redux(res.data))
        socketFileStatusListener(res.data._id)
    }
    catch(e){
        console.log(e)
    }
}
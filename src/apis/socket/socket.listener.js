import {socket} from './socket'
import {store} from '../../redux/Store'
import {socketEvents} from '../config'
import {changeFileStatus} from '../../redux/actions/file.action'

/** this event called from Sidebar component */
export const socketFileStatusListener = (userId) =>{
    console.log('listening to', `${socketEvents.DONE}-${userId}`)
    socket.on(`${socketEvents.DONE}-${userId}`, ({_id}) => {
        console.log('file uploaded ', _id)
        store.dispatch(changeFileStatus(_id))
    })
}
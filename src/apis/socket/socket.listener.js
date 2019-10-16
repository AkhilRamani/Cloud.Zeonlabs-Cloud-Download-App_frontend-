import {socket} from './socket'
import {store} from '../../redux/Store'
import {socketEvents} from '../config'
import {changeFileStatus} from '../../redux/actions/file.action'
import {notify} from '../../components/utility'
import {notifyMsgs, fileStatus} from '../../common/constants'

export const socketFileStatusListener = (userId) =>{

    socket.on(`${socketEvents.DONE}-${userId}`, ({_id}) => {
        console.log('file uploaded ', _id)
        store.dispatch(changeFileStatus(_id, fileStatus.DONE))
        notify(notifyMsgs.DOWNLOADED_MSG)
    })

    socket.on(`${socketEvents.FAILED}-${userId}`, ({_id}) => {
        console.log('file upload failed', _id)
        store.dispatch(changeFileStatus(_id, fileStatus.FAILED))
        notify(notifyMsgs.DOWNLD_FAILED)
    })
}
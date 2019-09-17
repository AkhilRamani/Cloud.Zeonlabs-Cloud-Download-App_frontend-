import io from 'socket.io-client/dist/socket.io'
import {serverUrl} from '../../common/constants'

export const socket = io(serverUrl)


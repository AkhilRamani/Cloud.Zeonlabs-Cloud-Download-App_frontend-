import io from 'socket.io-client/dist/socket.io'
import serverUrl from './config'

export const socket = io(serverUrl)


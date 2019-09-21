import React from "react"

import ListContainer from '../../components/navigations/ListContainer/ListContainer'
import {socket} from '../../apis/socket/socket'
import { HeaderSidebarWrapper } from "../../components/navigations/HeaderSidebarWrapper"


class MainApp extends React.Component {

    componentDidMount() {
        socket.on('connect', () => console.log('socket server connected'))
    }

    render(){
        return ( 
            <HeaderSidebarWrapper >
                <ListContainer />
            </HeaderSidebarWrapper>
        )
    }
}

export default MainApp
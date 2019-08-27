import React from "react"

import '../styles/global.styles.scss'
import Header from '../components/navigations/header/Header'
import Sidebar from '../components/navigations/Sidebar/Sidebar'
import ListContainer from '../components/navigations/ListContainer/ListContainer'
import {socket} from '../apis/socket'


class MainApp extends React.Component {

    componentDidMount() {
        socket.on('connect', () => console.log('socket server connected'))
    }

    render(){
        return ( 
            <>
            <Header />
            <div className='main-container' >
                <div className='main-sidebar-container' >
                    <Sidebar />
                </div>
                <ListContainer />
            </div>
        </>)
    }
}

export default MainApp
import React from 'react'

import './Sidebar.modules.scss'
import {getUserProfile} from '../../../apis/apis'
import {ProgressBar} from '../../utility'
import DriveInfo from '../../DriveInfo/DriveInfo'

class Sidebar extends React.Component{

    componentDidMount(){
        getUserProfile()
            .then(res => console.log(res.data))
            .catch(e => console.log(e))
    }

    render(){
        return(
            <div className='sidebar-container' >
                <div className='sb-inner' >
                    <ProgressBar progress={40} />
                    <DriveInfo />
                </div>
            </div>
        )
    }
} 

export default Sidebar
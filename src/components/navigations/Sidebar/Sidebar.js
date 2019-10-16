import React from 'react'

import './Sidebar.modules.scss'
import DriveInfo from '../../DriveInfo/DriveInfo'
import { CloudIcon, StorageIcon } from '../../icons/icons'

const Sidebar = () => {
    return(
        <div className='sidebar-container' >
            <div className='sb-title-div g-flex-ac' >
                {/* <CloudIcon style={{opacity: 0.5, marginRight: 10}} /> */}
                <StorageIcon style={{opacity: 0.5, marginRight: 10}} />
                <h3 className='g-roboto' >My drive</h3>
            </div>
            <div className='sb-inner' >
                <DriveInfo />
            </div>
        </div>
    )
}

export default Sidebar
import React from 'react'
import {connect} from 'react-redux'

import './Sidebar.modules.scss'
import {getUserProfile} from '../../../apis/apis'
import DriveInfo from '../../DriveInfo/DriveInfo'
import {storeUser_redux} from '../../../redux/actions/user.actions'
import {socketFileStatusListener} from '../../../apis/socket/socket.listener'
import { CloudIcon, StorageIcon } from '../../icons/icons';
import { fetchAndStoreAvatar } from '../../../common/common.utils'

class Sidebar extends React.Component{

    componentDidMount(){
        getUserProfile()
            .then(res => {
                console.log(res.data)
                res.data.avatar && fetchAndStoreAvatar(res.data._id)
                this.props.storeUser_redux(res.data)
                socketFileStatusListener(res.data._id)
            })
            .catch(e => console.log(e))
    }

    render(){
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
} 

const mapDispatchToProps = dispatch => ({
    storeUser_redux: user => dispatch(storeUser_redux(user))
})

export default connect(null, mapDispatchToProps)(Sidebar)
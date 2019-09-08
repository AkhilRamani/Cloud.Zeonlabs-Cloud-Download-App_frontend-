import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import './ProfileDDMenu.styles.scss'
import {clearToken} from '../../../common/common.utils'
import {logoutUser} from '../../../apis/apis'
import {logout_redux} from '../../../redux/actions/user.actions'
import {ProfilePic} from '../../utility'
import { formatAvatarChar } from '../../../Utils/utils';
import {LogoutIcon} from '../../icons/icons'

const ProfileDDMenu = (props) => {

    const _handleLogout = () => {
        logoutUser()
            .then(res => {
                clearToken()
                //clear redux store
                props.logout_redux()
                props.history.push('/auth')
            })
            .catch(e => console.log(e))
    }

    return(
        <div className='ddm-main h-ddm-main' >
            <div className='g-flex-ac h-ddm-profile-div' >
                <ProfilePic src={props.user.avatar} text={formatAvatarChar(props.user.f_name, props.user.l_name)} size={78} />
                <div style={{paddingLeft: 20}} >
                    <h4 className='g-roboto' >{props.user.f_name +' '+ props.user.l_name}</h4>
                    <p className='g-roboto h-ddm-p-email' >{props.user.email}</p>
                </div>
            </div>
            {/* <div className="ddm-item g-flex-ac" >
                <p className='ddm-text g-roboto' style={{paddingLeft: 10}} >About</p>
            </div> */}
            <div className="ddm-item g-flex-ac" onClick={_handleLogout} >
                <LogoutIcon />
                <p className='ddm-text g-roboto'>Logout</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => state.user
const mapDispatchToProps = dispatch => ({
    logout_redux: () => dispatch(logout_redux())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileDDMenu))
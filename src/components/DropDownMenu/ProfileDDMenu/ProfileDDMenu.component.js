import React, { useState } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import './ProfileDDMenu.styles.scss'
import {clearLocalStorage} from '../../../common/common.utils'
import {logoutUser} from '../../../apis/apis'
import {logout_redux} from '../../../redux/actions/user.actions'
import {ProfilePic, OverlayLoader, notify} from '../../utility'
import { formatAvatarChar } from '../../../Utils/utils';
import {LogoutIcon, EditIcon} from '../../icons/icons'
import { routes, notifyMsgs } from '../../../common/constants'

const ProfileDDMenu = (props) => {
    const [oLoader, setOLoader] = useState(false)

    const _handleLogout = () => {
        setOLoader(true)
        logoutUser()
            .then(res => {
                // clearToken()
                clearLocalStorage()
                //clear redux store
                props.logout_redux()
                props.history.push('/auth')
            })
            .catch(e => {
                console.log(e)
                setOLoader(false)
                notify(notifyMsgs.COMMON_ERR)
            })
    }

    const _handleEditProfile = () => props.history.push(routes.EDIT_PROFILE)

    return(
        <div className='ddm-main h-ddm-main' >
            <OverlayLoader active={oLoader} />

            <div className='g-flex-ac h-ddm-profile-div' >
                <ProfilePic src={props.user.avatarUrl} text={formatAvatarChar(props.user.f_name, props.user.l_name)} size={78} />
                <div style={{paddingLeft: 20}} >
                    <h4 className='g-roboto' >{props.user.f_name +' '+ props.user.l_name}</h4>
                    <p className='g-roboto h-ddm-p-email' >{props.user.email}</p>
                </div>
            </div>
            <div className="ddm-item g-flex-ac" onClick={_handleEditProfile} >
                <EditIcon />
                <p className='ddm-text g-roboto'>Edit profile</p>
            </div>
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
import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import './ProfileDDMenu.styles.scss'
import {clearToken} from '../../../common/common.utils'
import {logoutUser} from '../../../apis/apis'
import {logout_redux} from '../../../redux/actions/user.actions'

const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRQOjHieQruxL-k7StNOP-KTKQXtqkWuspuG6vjnKbg901k_JIA'

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
                <img src={imageUrl} className='profile-pic-common profile-pic-big' alt='Profile' />
                <div style={{paddingLeft: 20}} >
                    <h4 className='g-roboto' >Akhil Ramani</h4>
                    <p className='g-roboto h-ddm-p-email' >akhilramani@mail.com</p>
                </div>
            </div>
            <div className="ddm-item g-flex-ac" onClick={_handleLogout} >
                <p className='ddm-text g-roboto' >Logout</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    logout_redux: () => dispatch(logout_redux())
})

export default connect(null, mapDispatchToProps)(withRouter(ProfileDDMenu))
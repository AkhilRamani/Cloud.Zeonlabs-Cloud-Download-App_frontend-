import React from 'react'
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import './Header.modules.scss'
import {ProfilePic, Logo} from '../../utility'
import {RoundIcon} from '../../icons/round.icon'
import ProfileDDMenu from '../../DropDownMenu/ProfileDDMenu/ProfileDDMenu.component'
import {formatAvatarChar} from '../../../Utils/utils'
import { InfoIcon } from '../../icons/icons'
import ProjectInfo from '../ProjectInfo/ProjectInfo'
import { isAuthenticated } from '../../../common/common.auth'
import { routes } from '../../../common/constants'


const popupProps = {
    position:'bottom right',
    closeOnDocumentClick: true,
    contentStyle: {padding: 0, border: 'none', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 12px', borderRadius: 5, width: 'auto' }
}

const Header = props => {
    return (
        <div className="header-container g-flex-ac" >
            <Link to={routes.APP} className='header-logo g-flex-ac'>
                <Logo />
                <p className='g-roboto'>Beta</p>
            </Link>

            <div className='g-flex' >
                <RoundIcon/>

                <Popup
                    trigger={
                        <div className='header-menu-r-btn g-flex-ac' >
                            <InfoIcon style={{margin: 'auto', fill: '#003d7cb5'}} />
                        </div>
                    }
                    {...popupProps}
                >
                    <ProjectInfo />
                </Popup>

                {
                    isAuthenticated() &&
                    (
                        !props.user.f_name ?
                            <RoundIcon className='g-sklton-line h-pro-pic' />
                        :   <Popup 
                                trigger={<div className='header-pro-pic'>
                                    <ProfilePic 
                                        src={props.user.avatarUrl} 
                                        text={formatAvatarChar(props.user.f_name, props.user.l_name)} 
                                        className='h-pro-pic' />
                                    </div>}
                                {...popupProps}
                            >
                                <ProfileDDMenu />
                            </Popup>
                    )
                }
                
            </div>
        </div>
    )
}

const mapStateToProps = state => state.user

export default connect(mapStateToProps, null)(withRouter(Header))
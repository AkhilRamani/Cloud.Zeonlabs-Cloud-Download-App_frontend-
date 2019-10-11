import React from 'react'
import Popup from 'reactjs-popup'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import './Header.modules.scss'
import {ProfilePic} from '../../utility'
import {RoundIcon} from '../../icons/round.icon'
import ProfileDDMenu from '../../DropDownMenu/ProfileDDMenu/ProfileDDMenu.component'
import {formatAvatarChar} from '../../../Utils/utils'

const Header = (props) => {
    return (
        <div className="header-container" >
            <h2 className='header-logo g-source-sans'><font style={{color: '#FDD235'}} >Cloud.</font>Zeonlabs</h2>
            <div className='header-menu' >
                <RoundIcon/>
                <RoundIcon/>
                
                {
                    props.authenticated &&
                    // isAuthenticated() &&
                    (
                        !props.user.f_name ?
                            <RoundIcon className='g-sklton-line h-pro-pic' />
                        :   <Popup 
                                trigger={<div style={{cursor: 'pointer'}} >
                                    <ProfilePic 
                                        src={props.user.avatarUrl} 
                                        text={formatAvatarChar(props.user.f_name, props.user.l_name)} 
                                        className='h-pro-pic' />
                                    </div>}
                                position='bottom right'
                                closeOnDocumentClick
                                contentStyle={{padding: 0, border: 'none', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 12px', borderRadius: 5, width: 'auto' }}
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
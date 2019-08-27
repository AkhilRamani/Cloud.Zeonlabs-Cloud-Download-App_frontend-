import React from 'react'
import Popup from 'reactjs-popup'
import {withRouter} from 'react-router-dom'

import './Header.modules.scss'
import {RoundIcon} from '../../icons/round.icon'
import ProfileDDMenu from '../../DropDownMenu/ProfileDDMenu/ProfileDDMenu.component'
import {ProfilePic} from '../../utility'

const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRQOjHieQruxL-k7StNOP-KTKQXtqkWuspuG6vjnKbg901k_JIA'

const Header = () => (
    <div className="header-container" >
        <h2 className='header-logo g-source-sans'><font style={{color: '#FDD235'}} >Cloud.</font>Zeonlabs</h2>
        <div className='header-menu' >
            <RoundIcon/>
            <RoundIcon/>
            
            <Popup 
                trigger={<ProfilePic text={'AK'} className='h-pro-pic'/>}
                position='bottom right'
                closeOnDocumentClick
                contentStyle={{padding: 0, border: 'none', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 12px', borderRadius: 5, width: 'auto' }}
            >
                <ProfileDDMenu />
            </Popup>
            
        </div>
    </div>
)

export default withRouter(Header)
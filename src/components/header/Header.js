import React from 'react'

import {RoundIcon} from '../icons/round.icon'
import './Header.modules.scss'

const Header = () => (
    <div className="header-container" >
        <h2 className='header-logo g-source-sans'><font style={{color: '#FDD235'}} >Cloud.</font>Zeonlabs</h2>
        <div className='header-menu' >
            <RoundIcon/>
            <RoundIcon/>
            <RoundIcon/>
        </div>
    </div>
)

export default Header
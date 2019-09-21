import React from 'react'
import { BackIcon } from '../../icons/icons'

import './NavHeader.styles.scss'

export const NavHeader = ({title, onBackClick, ...rest}) => (
    <div className='g-flex-ac utl-nh-main' {...rest} >
        <BackIcon className='nh-back-btn' onClick={onBackClick} />
        <h3 className='g-roboto nh-title' >{title}</h3>
    </div>
)
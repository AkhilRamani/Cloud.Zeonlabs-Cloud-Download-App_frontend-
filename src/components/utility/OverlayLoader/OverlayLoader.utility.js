import React from 'react'
import { Spinner } from '..'

import './OverlayLoader.styles.scss'

export const OverlayLoader = ({active}) => (
    active && 
        <div className='utl-o-loader' >
            <Spinner size={60} />
        </div>
)
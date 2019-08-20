import React from 'react'

import './label.utility.scss'

export const Label = ({title}) => (
    <div className='utl-label' >
        <p className='g-roboto' >{title}</p>
    </div>
)
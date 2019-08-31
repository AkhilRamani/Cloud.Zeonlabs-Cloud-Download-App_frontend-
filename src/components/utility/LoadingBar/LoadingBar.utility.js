import React from 'react'

import './LoadingBar.styles.scss'

const LoadingBar = (props) => (
    <div className='utl-loader' {...props} >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
)

export {LoadingBar}
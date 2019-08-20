import React from 'react'
import './Spinner.utility.scss'

export const Spinner = ({size, ...rest}) => (
    <div className="animate_loader_wrapper" {...rest} >
        <div className="animate_loader">
            <svg style={{height: size || 40, width: size || 40, margin: 0}} className="circular" viewBox="25 25 50 50">
            <circle style={{stroke: '#00000045'}} className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4.5" />
            </svg>
        </div>
    </div>
)
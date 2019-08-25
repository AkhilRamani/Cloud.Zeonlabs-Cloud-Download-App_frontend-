import React from 'react'
import './Input.utility.scss'

export const Input = ({className, ...rest}) => (
    <input className={`utl-input g-input ${className}`} {...rest} />
)
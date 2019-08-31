import React from 'react'
import './Input.utility.scss'

export const Input = ({className, err, ...rest}) => (
    <input className={`utl-input g-input ${className} ${err&&'utl-input-err'}`} {...rest} />
)
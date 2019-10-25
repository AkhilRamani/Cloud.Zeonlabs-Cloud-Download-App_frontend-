import React from 'react'
import './label.utility.scss'

export const Label = {
    Default: ({title, color}) => <p className='g-roboto utl-label' style={{backgroundColor: color || '#4AA8FF'}} >{title}</p>,
    RoundSides: ({title, color}) => <p className='g-roboto utl-label utl-l-rnd-s' style={{backgroundColor: color || '#4AA8FF'}} >{title}</p>
}
import React from 'react'

export const RoundIcon = ({className}) => <div className={className} style={{width: 45, height: 45, borderRadius: '50%', backgroundColor: '#EAF4FE', marginLeft: '1.2rem'}} />;

export const RoundYelloIcon = ({size, style}) => <div
    className='p-color-yellow'
    style={{width: size, height: size, borderRadius: '50%', ...style}}
/>
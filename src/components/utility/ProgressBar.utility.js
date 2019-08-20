import React from 'react'

const styleGlobal = {
    borderRadius: 15,
    height: 11
}

export const ProgressBar = ({progress}) => (
    <div style={{
        ...styleGlobal,
        // width: '100%',
        backgroundColor: '#1463b8'
    }}>
      <div style={{
            ...styleGlobal,
            width: `${progress}%`,
            backgroundColor: '#ffffff'
        }} />
    </div>
)
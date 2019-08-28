import React from 'react'

const styleGlobal = {
    borderRadius: 15,
    height: 11
}

export const ProgressBar = ({progress}) => (
    <div style={{
        ...styleGlobal,
        // width: '100%',
        backgroundColor: '#eaf4fe'
    }}>
      <div style={{
            ...styleGlobal,
            width: `${progress}%`,
            backgroundColor: '#1879e3'
        }} />
    </div>
)
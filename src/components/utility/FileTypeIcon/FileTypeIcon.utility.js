import React from 'react'
import FileIcon from 'react-file-icon'
import {iconStyles} from './FileIconStyles'

export const FileTypeIcon = ({type}) => (
    <FileIcon 
        fold={false} 
        // extension={type} 52
        size={45} 
        radius={10} 
        {...iconStyles[type]}
    />
)
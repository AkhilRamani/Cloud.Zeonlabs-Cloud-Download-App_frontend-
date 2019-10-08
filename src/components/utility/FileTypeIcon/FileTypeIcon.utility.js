import React from 'react'
import FileIcon from 'react-file-icon'
import {geticonStyles} from './FileIconStyles'

export const FileTypeIcon = ({type}) => (
    <FileIcon 
        fold={false} 
        size={45} 
        radius={12} 
        {...geticonStyles(type)}
        glyphColor='gray'
        // color='#ffefd68c'
        // glyphColor='#ff9e00'
    />
)
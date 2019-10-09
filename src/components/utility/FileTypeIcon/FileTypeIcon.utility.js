import React from 'react'
import FileIcon from 'react-file-icon'
import {geticonStyles} from './FileIconStyles'

export const FileTypeIcon = ({type, large}) => (
    !large ?
        <FileIcon 
            fold={false} 
            size={45} 
            radius={12} 
            {...geticonStyles(type)}
            glyphColor='gray'
            // color='#ffefd68c'
            // glyphColor='#ff9e00'
        />
    :
        <FileIcon 
            // fold={false}
            size={90}
            extension={type}
            radius={5}
            {...geticonStyles(type)}
            glyphColor='gray'
            labelColor='gray'
        />
)
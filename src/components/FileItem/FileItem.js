import React from 'react'
import Popup from 'reactjs-popup'
import TimeAgo from 'react-timeago'

import './FileItem.styles.scss'
import {DotIcon} from '../icons/dotMenu.icon'
import DropDownMenu from '../DropDownMenu/DropDownMenu'
import {formatBytes} from '../../Utils/utils'
import { FileTypeIcon } from '../utility'

const FileItem = ({id, name, size, time, status, type}) => {
    
    return status==='uploading' ? (
        <div className='fi-container g-flex-ac skeleton-line' style={{justifyContent: 'space-between'}} >
            <div className='g-flex-ac'>
                <div style={{margin: '14px 16px 12px 16px'}} >
                    <FileTypeIcon type={type.split('/')[1]} />
                </div>
                <div>
                    <h3 className='fi-file-name g-roboto' >{name}</h3>
                    <div className='fi-inner-container g-flex-ac' >
                        <div className='g-flex-ac' >
                            <div className="fi-dot" />
                            <p className='fi-file-date g-roboto' ><TimeAgo date={time} /> &nbsp;&bull;&nbsp;  {formatBytes(size)} &nbsp;&bull;&nbsp; Downloading</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <DotIcon className='fi-dot-icon' style={{margin: 20}} />
            </div>
        </div>
    )
    :
    (
        status==='failed' ? (
            <div className='fi-container g-flex-ac fi-container-active' style={{justifyContent: 'space-between'}} >
                <div className='g-flex-ac'>
                    <div style={{margin: '14px 16px 12px 16px'}} >
                        <FileTypeIcon type={type.split('/')[1]} />
                    </div>
                    <div>
                        <h3 className='fi-file-name g-roboto' >{name}</h3>
                        <div className='fi-inner-container g-flex-ac' >
                            <div className='g-flex-ac' >
                                <div className="fi-dot" />
                                <p className='fi-file-date g-roboto' ><TimeAgo date={time} /> &nbsp;&bull;&nbsp;  {formatBytes(size)} &nbsp;&bull;&nbsp; <font className='fi-failed-lable' >Failed</font></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <DotIcon className='fi-dot-icon' style={{margin: 20}} />
                </div>
            </div>
        )
        :
        (
            <div className='fi-container g-flex-ac fi-container-active' style={{justifyContent: 'space-between'}} >
                <div className='g-flex-ac'>
                    <div style={{margin: '14px 16px 12px 16px'}} >
                        <FileTypeIcon type={type.split('/')[1]} />
                    </div>
                    <div>
                        <h3 className='fi-file-name g-roboto' >{name}</h3>
                        <div className='fi-inner-container g-flex-ac' >
                            <div className='g-flex-ac' >
                                <div className="fi-dot" />
                                <p className='fi-file-date g-roboto' ><TimeAgo date={time} /> &nbsp;&bull;&nbsp;  {formatBytes(size)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Popup trigger={<DotIcon className='fi-dot-icon' style={{margin: 20}} />} 
                        position='left top'
                        closeOnDocumentClick
                        contentStyle={{padding: 0, border: 'none', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 12px', borderRadius: 5,
                        // transition: 'transform .3s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)',
                        // transform: `scale(0)`,
                        // transformOrigin: '0 0'
                    }}
                    >
                        {close => <DropDownMenu fileId={id} close={close} fileName={name} />}
                    </Popup>
                </div>
            </div>
        )
    )
}

export default FileItem
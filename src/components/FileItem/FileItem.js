import React from 'react'

import Popup from 'reactjs-popup'
import TimeAgo from 'react-timeago'

import './FileItem.styles.scss'
import {DotIcon} from '../icons/dotMenu.icon'
import DropDownMenu from '../DropDownMenu/DropDownMenu'
import {formatBytes} from '../../Utils/utils'

const FileItem = ({id, name, size, time, status}) => {

    return status==='uploading' ? (
        <div className='fi-container g-flex-ac skeleton-line' style={{justifyContent: 'space-between'}} >
            <div className='g-flex-ac'>

                <div style={{height: 40, width: 40, borderRadius: '50%', backgroundColor: '#EAF4FE', margin: 20}} />
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
        <div className='fi-container g-flex-ac fi-container-active' style={{justifyContent: 'space-between'}} >
            <div className='g-flex-ac'>

                <div style={{height: 40, width: 40, borderRadius: '50%', backgroundColor: '#EAF4FE', margin: 20}} />
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
                    {close => <DropDownMenu fileId={id} close={close} />}
                </Popup>
            </div>
        </div>
    )
}

export default FileItem
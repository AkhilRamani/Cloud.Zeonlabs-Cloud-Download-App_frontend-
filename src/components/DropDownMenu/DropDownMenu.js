import React, {useState} from 'react'
import {connect} from 'react-redux'
import Popup from 'reactjs-popup'
import CopyToClipBoard from 'react-copy-to-clipboard'

import './dropDownMenu.style.scss'
import {Button, notify, Input} from '../utility'
import {ShareIcon, DeleteIcon, RenameIcon, DownloadIcon, ErrorOutlineIcon, LinkIcon, InputIcon} from '../icons/icons'
import { deleteFile as deleteFileApi, renameFile as renameFileApi } from '../../apis/apis';
import {deleteFile as deleteReduxFile, renameFile as renameReduxFile} from '../../redux/actions/file.action'
import {decreaseUsedSpace} from '../../redux/actions/user.actions'
import {serverUrl, notifyMsgs} from '../../common/constants'
import { getFileSharingUrl } from '../../common/common.utils'


const DdMenuItem = ({name, onClick, Icon}) => (
    <div className="ddm-item g-flex-ac" onClick={onClick} >
        {Icon}
        <p className='ddm-text g-roboto' >{name}</p>
    </div>
)

const PopupBox = ({trigger, content, closeOutsideClick}) => (
    <Popup
        trigger={trigger}
        modal
        closeOnDocumentClick={closeOutsideClick}
        contentStyle={{ borderRadius: 5, width: 'auto', padding: 0, border: 'none' }}
    >{content}</Popup>
)

const popupSideMenuStyle = {padding: 0, border: 'none', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 12px', borderRadius: 5, width: 'auto' }

const DropDownMenu = ({fileId, close, fileName, deleteReduxFile, renameReduxFile, decreaseUsedSpace}) => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState(fileName)
    const [shareUrl] = useState(getFileSharingUrl(fileId))

    const changeLoadingState = () => setLoading(!loading)

    const deleteFile = () => {
        changeLoadingState()
        deleteFileApi(fileId)
            .then(res => {
                changeLoadingState()
                decreaseUsedSpace(res.data.size)
                deleteReduxFile(res.data._id)
                notify(notifyMsgs.DELETE_MSG)
            })
            .catch(e => {
                changeLoadingState()
                notify(notifyMsgs.COMMON_ERR)
            })
    }

    const renameFile = () => {
        if(name === fileName) return null
        changeLoadingState()
        renameFileApi(fileId, name.trim())
            .then(res => {
                changeLoadingState()
                renameReduxFile(fileId, res.data.name)
                notify(notifyMsgs.RENAME_MSG)
                close()
            })
            .catch(e => {
                changeLoadingState()
                notify(notifyMsgs.COMMON_ERR)
            })
    }

    const downloadFile = () => {
        window.open(`${serverUrl}/file/download/${fileId}`, '_blank')
        close()
    }

    return (
        <div className="ddm-main g-flex-ac" >
            <div className="ddm-item g-flex-ac" onClick={downloadFile} >
                <DownloadIcon />
                <p className='ddm-text g-roboto' >Download</p>
            </div>


            <Popup 
                trigger={<div className="ddm-item g-flex-ac" >
                    <RenameIcon />
                    <p className='ddm-text g-roboto' >Rename</p>
                </div>}

                position='left top'
                closeOnDocumentClick
                contentStyle={popupSideMenuStyle}
            >
                {close => (
                    <div className='ddm-main ddm-psm-main g-flex-ac' >
                        <div className='g-flex-ac' >
                            <InputIcon className='ddm-psm-input-icon' />
                            <Input style={{width: 270,  borderRadius: '0 5px 5px 0'}} type='text' placeholder='Enter new file name' onChange={e => setName(e.target.value)} value={name} />
                        </div>
                        <div className='ddm-psm-sub g-flex-ac' >
                            <Button style={{minWidth: 75, }} color='#dedede' name='Cancel' onClick={() => close()} disabled={loading} />
                            <Button style={{minWidth: 75, marginLeft: 13}} name='Rename' onClick={renameFile} loading={loading} />
                        </div>
                    </div>
                )}
            </Popup>

            <Popup
                trigger={<div className="ddm-item g-flex-ac" >
                    <ShareIcon />
                    <p className='ddm-text g-roboto' >Share</p>
                </div>}

                position='left top'
                closeOnDocumentClick
                contentStyle={popupSideMenuStyle}
            >
                {<div className='ddm-main ddm-psm-main g-flex-ac'>
                    <div className='g-flex-ac' >
                        <LinkIcon className='ddm-psm-input-icon' />
                        <Input style={{width: 270, borderRadius: '0 5px 5px 0'}} value={shareUrl} readOnly />
                    </div>
                    <div className='g-flex-ac ddm-psm-sub' >
                        <CopyToClipBoard
                            text={shareUrl}
                            onCopy={() => notify('Url copied!')}
                        ><Button name='Copy'/></CopyToClipBoard>
                    </div>
                </div>}
            </Popup>

            <PopupBox 
                trigger={<DdMenuItem Icon={<DeleteIcon />} name='Delete' onClick={() => close()} />}
                content={
                    <>
                        {/* <div style={{width: "100%", height: 10, backgroundColor:'#ff4343', borderRadius: '5px 5px 0 0'}} /> */}

                        <div className='popc-main'>
                            <div className='g-flex-ac popc-sub-div' >
                                <ErrorOutlineIcon className='popc-icon' />
                                <div>
                                    <h4 className='g-roboto' >Are you sure?</h4>
                                    <p className='g-roboto popc-sub-text' >This action cannot be undone.</p>
                                </div>
                            </div>
                            <div className='g-flex-ac popc-btn-div' >
                                <Button color='#dedede' name='Cancel' onClick={() => close()} disabled={loading} />
                                <Button style={{marginLeft: 20}} color='#ff4343' name='Delete' onClick={deleteFile} loading={loading} />
                            </div>
                        </div>
                    </>
                }
                closeOutsideClick={!loading}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteReduxFile: id => dispatch(deleteReduxFile(id)),
    renameReduxFile: (id, name) => dispatch(renameReduxFile(id, name)),
    decreaseUsedSpace: fileSize => dispatch(decreaseUsedSpace(fileSize))
})

export default connect(null, mapDispatchToProps)(DropDownMenu)
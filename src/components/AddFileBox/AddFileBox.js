import React from 'react'
import {connect} from 'react-redux'

import './DriveInfoBox.styles.scss'
import {addFile} from '../../redux/actions/file.action'
import {increaseUsedSpace} from '../../redux/actions/user.actions'
import {UrlInputUpload, notify} from '../utility'
import {uploadFile} from '../../apis/apis'
import { isValidUrl } from '../../common/common.utils'
import { notifyMsgs } from '../../common/constants'

class AddFileBox extends React.Component{
    state={
        loading: false,
        urlText: ''
    }

    changeLoadingState = () => this.setState(state =>({loading: !state.loading}))

    onUrlSubmit = async () => {
        if(!this.state.urlText) return null
        if(isValidUrl(this.state.urlText)){
            this.handleFileDownloadRequest(this.state.urlText)
        }
        else{
            notify(notifyMsgs.INVALID_FILE_URL)
        }
    }

    handleFileDownloadRequest = async url => {
        this.changeLoadingState()
        try{
            const res = await uploadFile(url)
            const file = res.data
            this.props.addFile({ _id: file._id, name: file.name, size: file.size, type: file.type, createdAt: file.createdAt, status: file.status})
            this.props.increaseUsedSpace(file.size)
            this.setState({urlText: ''})
        }
        catch(e){
            if(e.response){
                switch(e.response.status){
                    case 412:
                        notify(notifyMsgs.FILE_SIZE_GREATER_200MB)
                        break
                    case 422:
                        notify(notifyMsgs.INVALID_FILE_URL)
                        break
                    case 406:
                        notify(notifyMsgs.FILE_NO_FOUND)
                        break
                    case 407: 
                        notify(notifyMsgs.NO_STORG_SPACE)
                        break
                    default:
                        notify(notifyMsgs.COMMON_ERR)
                }
            }
            else notify(notifyMsgs.COMMON_ERR)
        }
        this.changeLoadingState()
    }

    onInputChange = (e) => this.setState({urlText: e.target.value.trim()})

    render(){
        return(
            <div className='add-file-box g-round-corner'>
                <div className='afb-c-box' >
                    <h4 className='main-title g-roboto' >Add file</h4>
                    <UrlInputUpload loading={this.state.loading}
                        onSubmit={this.onUrlSubmit}
                        onChange={this.onInputChange}
                        value={this.state.urlText}
                    />
                    <p className='g-roboto info-text'>* For Beta vesion, maximum file size is limited to 200mb.</p>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addFile: file => dispatch(addFile(file)),
    increaseUsedSpace: fileSize => dispatch(increaseUsedSpace(fileSize))
})

export default connect(null, mapDispatchToProps)(AddFileBox)
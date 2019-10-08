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
            <div className='drive-info-box'>
                <div className='g-flex dib-c-box' >
                <p className='main-title g-roboto' >Add file</p>
                    <UrlInputUpload loading={this.state.loading}
                        onSubmit={this.onUrlSubmit}
                        onChange={this.onInputChange}
                        value={this.state.urlText}
                    />
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
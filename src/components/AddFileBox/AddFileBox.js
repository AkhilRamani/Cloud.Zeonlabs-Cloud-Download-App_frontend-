import React from 'react'
import {connect} from 'react-redux'

import './DriveInfoBox.styles.scss'
import {addFile} from '../../redux/actions/file.action'
import {increaseUsedSpace} from '../../redux/actions/user.actions'
import {UrlInputUpload} from '../utility'
import {uploadFile} from '../../apis/apis'

class AddFileBox extends React.Component{
    state={
        loading: false,
        urlText: ''
    }

    changeLoadingState = () => this.setState(state =>({loading: !state.loading}))

    onUrlSubmit = async () => {
        if(this.state.urlText){

            this.changeLoadingState()   
            uploadFile(this.state.urlText)
            .then(res => {
                const file = res.data
                this.props.addFile({ _id: file._id, name: file.name, size: file.size, createdAt: file.createdAt, status: file.status})
                this.props.increaseUsedSpace(file.size)
                this.setState({urlText: ''})
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => this.changeLoadingState())

        }
    }

    onInputChange = (e) => this.setState({urlText: e.target.value})

    render(){
        return(
            <div className='drive-info-box'>
                {/* <div className='dib-c-box g-flex' style={{}} >
                    <p className='main-title g-roboto' >My drive</p>

                    <div>
                        <div className='g-flex-ac'>
                            <div className='g-flex-ac dib-sub-div' >
                                <p style={{ color: 'white', opacity: 0.9, fontWeight: '600' }} >Total available space :</p>
                            </div>
                        </div>
                        <div className='g-flex-ac' style={{marginBottom: 3}} >
                            <RoundYelloIcon size={22} />
                            <div className='g-flex-ac dib-sub-div'>
                                <Label title='767mb used' />
                                <Label title='1gb total' />
                            </div>
                        </div>

                        <div className='g-flex-ac' >
                            <RoundYelloIcon size={22} />
                            <div className='dib-sub-div' >
                                <ProgressBar progress={60}/>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{alignItems: 'center'}} >
                    <Button name='Upgrade' />
                </div> */}

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
import React, { Component } from 'react'
import {connect} from 'react-redux'

import './FileList.styles.scss'
import FileItem from '../FileItem/FileItem'
import {addFile, changeFileStatus} from '../../redux/actions/file.action'
import {Spinner} from '../utility'
import {getAllFiles} from '../../apis/apis'
import {CloudOff} from '../icons/icons'

class FileList extends Component {
    state = {
        loading: true,
        userId: null
    }

    componentDidMount(){
        getAllFiles()
            .then(res => res.data.forEach(file => this.props.addFile(file)))
            .catch(e => console.log(e))
            .finally(() => this.setState({loading: false}))
    }

    render(){
        console.log(this.props.files)
        return this.state.loading ? 
            <div className='g-flex-ac f-list-loader-div' >
                <Spinner size={60} style={{margin: 20}} /> 
            </div>
            : (
                this.props.files[0] ?
                    this.props.files.map(file => (
                        <FileItem
                            key={file._id}
                            id={file._id}
                            name={file.name}
                            size={file.size}
                            time={file.createdAt}
                            status={file.status}
                            type={file.type}
                        />
                    ))
                : <div className='f-list-loader-div f-list-empty-screen g-flex-ac'>
                        <CloudOff />
                        <h4 className='g-roboto' >No downloaded files available</h4>
                        <p className='g-roboto' >Add file url in the above box to download<br/>file directly to your cloud storage</p>
                    </div>
        )
    }
}

const mapStateToProps = state => {
    return state.files
}

const mapDispatchToProps = dispatch => {
    return {
        addFile: file => dispatch(addFile(file)),
        changeFileStatus: fileId => dispatch(changeFileStatus(fileId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileList)
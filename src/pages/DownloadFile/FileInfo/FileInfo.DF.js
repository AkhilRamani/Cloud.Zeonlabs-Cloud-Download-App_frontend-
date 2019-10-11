import React, { useState, useEffect } from 'react'
import {withRouter} from 'react-router-dom'
import { FileTypeIcon, Button } from '../../../components/utility'
import { getFile } from '../../../apis/apis'
import { formatBytes } from '../../../Utils/utils'

const FileInfo = props => {
    const [fileInfo, setFileInfo] = useState({name: '', size: null, type: ''})

    useEffect(() => {
        getFile(props.match.params.id)
            .then(res => {
                console.log(res.data.url)
                setFileInfo(res.data)
            })
            .catch(e => {})
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

    return (
        <>
            <div className='g-flex df-wb-f-info' >
                {fileInfo.name ? 
                    <>
                        <div style={{minWidth: 90 }} >
                            <FileTypeIcon type={fileInfo.type.split('/')[1]} large />
                        </div>
                        <div style={{padding: '10px 0 0 20px'}} >
                            <h4 className='g-roboto' >{fileInfo.name}</h4>
                            <p className='g-roboto' >{formatBytes(fileInfo.size)}</p>
                        </div>
                    </>
                :
                <>
                    <div className='g-round-corner g-sklton-color g-sklton-line' style={{width: 75, height: 90, margin: '0 3px 0 10px'}} />
                    <div style={{padding: '10px 0 0 20px', flexGrow: 1}} >
                        <div className='g-round-corner g-sklton-color g-sklton-line' style={{height: 25}} />
                        <div className='g-round-corner g-sklton-color g-sklton-line' style={{width: 70, height: 20, marginTop: 8}} />
                    </div>
                </>
                }
            </div>
            <div className='g-flex' style={{alignSelf: 'stretch', justifyContent: 'flex-end'}} >
                {fileInfo.name
                    ? <a href={fileInfo.url} ><Button style={{width: 160}} name='Download' /></a>
                    : <div className='g-round-corner g-sklton-color g-sklton-line' style={{width: 160, height: 40}} />
                }
            </div>
        </>
    )
}

export default withRouter(FileInfo)
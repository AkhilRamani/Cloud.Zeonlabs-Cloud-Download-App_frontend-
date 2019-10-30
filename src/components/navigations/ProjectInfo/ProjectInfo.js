import React from 'react'
import './ProjectInfo.styles.scss'
import { Label } from '../../utility'
import { UpdatesIcon } from '../../icons/icons'

const ProjectInfo = () => {
    return (
        <div className='pi-m-container' >
            <div className='pi-f-updates g-round-corner' >
                <div className='g-flex-ac'>
                    <h4 className='g-roboto' >Future updates</h4>
                    {/* <Label.Default title='Future updates' /> */}
                </div>
                <div className='g-flex' >
                    <ul>
                        <li>File imports</li>
                        <li className='g-roboto' >Torrent downloading</li>
                        <li>Video and audio streaming</li>
                    </ul>
                    <UpdatesIcon />
                </div>
            </div>
            <div>
                <h4>Contact</h4>
            </div>
        </div>
    )
}

export default ProjectInfo
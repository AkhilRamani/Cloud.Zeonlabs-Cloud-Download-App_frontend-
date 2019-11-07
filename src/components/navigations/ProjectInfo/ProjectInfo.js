import React from 'react'
import './ProjectInfo.styles.scss'
import { UpdatesIcon, ContactIcon, GithubIcon, HeartIcon, LinkedinIcon } from '../../icons/icons'

const ProjectInfo = () => {
    
    return (
        <div className='pi-m-container' >
            <div className='pi-f-updates pi-sub-box g-round-corner' >
                <div className='g-flex-ac'>
                    <h4 className='g-roboto' >Future updates</h4>
                </div>
                <div className='g-flex' >
                    <ul>
                        <li>File imports</li>
                        <li>Torrent downloading</li>
                        <li>Decentralised object storage</li>
                        <li>Enterprise storage</li>
                        <li>Video and audio streaming</li>
                    </ul>
                    <div className='fu-icn-div g-flex' >
                        <UpdatesIcon />
                    </div>
                </div>
            </div>
            
            <div className='pi-contact pi-sub-box g-round-corner top-space g-flex-ac' >
                <div className='' >
                    <h4 className='g-roboto'>Contact</h4>
                    <p className='g-roboto'>Report bugs, Give suggestions, Fire queries at <font>zeonlabs@outlook.com</font></p>
                </div>
                <ContactIcon />
            </div>

            <div className='pi-dev-info g-flex-ac' >
                <p className='g-roboto g-flex-ac' >Made with&nbsp;<HeartIcon />&nbsp;by&nbsp;<font>Akhil Ramani</font></p>
                <div style={{height: 24}}>
                    <a href='https://www.github.com/akhilramani' target='_'><GithubIcon className='social-icn' /></a>
                    <a href='https://www.linkedin.com/in/akhil-ramani-630b51150' target='_'><LinkedinIcon className='social-icn'/></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo
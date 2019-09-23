import React, { Component } from 'react'
import { Input, Button, ProfilePic } from '../../../utility'
import {EditIcon} from '../../../icons/icons'

class PersonalInfo extends Component{
    state={
        avatar: ''
    }

    _handleFileInputChange = (e) => {
        const file = e.target.files[0]
        console.log(file)
        file && this.setState({
            avatar: URL.createObjectURL(e.target.files[0])
        })
    }

    render(){
        return (
            <div className='epn-info-box g-round-corner g-flex' >
                <div className='c-avatar-container g-flex-ac' >
                    <div className='c-avatar' >
                        <ProfilePic src={this.state.avatar} size={120} text='AK' textSize={40} />
                        <label htmlFor='file-input' ><EditIcon /></label>
                    </div>
                    <input type='file' id='file-input' onChange={this._handleFileInputChange} accept='image/*' />
                </div>
                
                <div className='g-flex-ac epn-margin-b' >
                    <Input value='Akhil' />
                    <div style={{width: 40}} />
                    <Input value='Ramani' />
                </div>
                <Input value='ramaniakhil094@gmail.com' disabled className='epn-margin-b' readOnly />
                <Button name='Update profile' style={{paddingLeft: 20, paddingRight: 20, marginTop: 10}} />
            </div>
        )
    }
}

export default PersonalInfo
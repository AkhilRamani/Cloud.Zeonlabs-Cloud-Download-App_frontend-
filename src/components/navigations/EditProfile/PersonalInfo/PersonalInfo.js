import React, { Component } from 'react'
import {connect} from 'react-redux'

import { Input, Button, ProfilePic, Typo } from '../../../utility'
import {EditIcon} from '../../../icons/icons'
import { formatAvatarChar } from '../../../../Utils/utils'
import { updateProfile } from '../../../../apis/apis'
import { updateUser, saveAvatarUrl } from '../../../../redux/actions/user.actions'
import { fetchAndStoreAvatar } from '../../../../common/common.utils'

class PersonalInfo extends Component{
    state={
        avatar: '', avatarFile: null,
        f_name: '', l_name: '', f_nameErr: false, l_nameErr: false, f_nameEdited: false, l_nameEdited: false,
        loading: false
    }

    _handleFileInputChange = (e) => {
        const file = e.target.files[0]
        console.log(file)
        file && this.setState({
            avatar: URL.createObjectURL(file),
            avatarFile: file
        })
    }

    _fNameInputChange = e => this.setState({f_name: e.target.value.trim(), f_nameErr: false, f_nameEdited: true})
    _lNameInputChnage = e => this.setState({l_name: e.target.value.trim(), l_nameErr: false, l_nameEdited: true})
    changeLoadingState = () => this.setState(state => ({loading: !state.loading}))

    _handleSubmit = () => {
        this.changeLoadingState()
        let data = new FormData()

        this.setState(state => ({
            f_name: state.f_name || (!state.f_nameEdited ? this.props.user.f_name : ''),
            l_name: state.l_name || (!state.l_nameEdited ? this.props.user.l_name : '')
        }), () => {
            const {f_name, l_name, avatarFile} = this.state
            if((f_name !== this.props.user.f_name || l_name !== this.props.user.l_name || avatarFile) && f_name.trim() && l_name.trim()){
                if(f_name !== this.props.user.f_name) data.append('f_name', f_name)
                if(l_name !== this.props.user.l_name) data.append('l_name', l_name)
                if(avatarFile) data.append('file', avatarFile)
                this._handleUpdateProfileRequest(data)
            }
            else{
                console.log('errr')
                !f_name.trim() && this.setState({f_nameErr: true})
                !l_name.trim() && this.setState({l_nameErr: true})
            }
        })
    }

    _handleUpdateProfileRequest = data => {
        updateProfile(data)
            .then(async res => {
                this.props.updateUser(res.data)
                if(res.data.avatar){
                    const avatarSaved = await fetchAndStoreAvatar(this.props.user._id)
                    if(!avatarSaved) console.log('avatar not saved on localstorage')
                }
            })
            .catch(e => console.log(e))
            .finally(() => this.changeLoadingState())
    }

    render(){
        const {f_name, l_name, email, avatar, avatarUrl} = this.props.user
        return (
            <div className='epn-info-box g-round-corner g-flex' >
                <div className='c-avatar-container g-flex-ac' >
                    <div className='c-avatar' >
                        {f_name ? <ProfilePic 
                                        src={(avatar && !this.state.avatarFile) ? avatarUrl : this.state.avatar} 
                                        size={120} 
                                        text={formatAvatarChar(f_name, l_name)} 
                                        textSize={40} 
                                    />
                                : <div className='g-sklton-line g-skltn-bg-color' style={{width: 120, height: 120, borderRadius: '50%'}} />
                        }
                        <label htmlFor='file-input' ><EditIcon /></label>
                    </div>
                    <input type='file' id='file-input' onChange={this._handleFileInputChange} accept='image/*' />
                </div>
                
                {f_name ?
                    <>
                        <div className='g-flex-ac epn-margin-b' >
                            <Input type='text' defaultValue={f_name} onChange={this._fNameInputChange} err={this.state.f_nameErr} placeholder='First name' />
                            <div style={{width: 40}} />
                            <Input type='text' defaultValue={l_name} onChange={this._lNameInputChnage} err={this.state.l_nameErr} placeholder='Last name' />
                        </div>
                        <Input type='text' defaultValue={email} disabled className='epn-margin-b' readOnly />
                    </>
                    :
                    <>
                        <div className='g-flex-ac epn-margin-b' >
                            <Input className='g-sklton-line' disabled/>
                            <div style={{width: 40}} />
                            <Input className='g-sklton-line' disabled />
                        </div>
                        <Input className='g-sklton-line epn-margin-b' disabled />
                    </>
                }
                <Button name='Update profile' style={{paddingLeft: 20, paddingRight: 20, marginTop: 10}} onClick={this._handleSubmit} loading={this.state.loading} />
            </div>
        )
    }
}

const mapStateToProps = state => state.user
const mapDispatchToProps = dispatch => ({
    updateUser: pInfo => dispatch(updateUser(pInfo)),
    saveAvatarUrl: url => dispatch(saveAvatarUrl(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo)
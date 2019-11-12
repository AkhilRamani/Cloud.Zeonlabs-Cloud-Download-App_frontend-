import React, { Component } from 'react'
import _ from 'lodash'
import { Input, Button, notify } from '../../../utility'
import { notifyMsgs } from '../../../../common/constants'
import { updatePassword } from '../../../../apis/apis'
import { isValidPassword, trimObject } from '../../../../common/common.utils'

class ChangePassword extends Component{
    state = {
        old_password: '', password: '', cPassword: '',
        old_passwordErr: false, passwordErr: false, cPasswordErr: false,
        loading: false
    }

    chnageLoadingState = () => this.setState(state => ({loading: !state.loading}))
    _handleTextInput = (attr, e) => this.setState({[attr]: e.target.value, [`${attr}Err`]: false})

    _oldPassInputChange = e => this._handleTextInput('old_password', e)
    _passInputChange = e => this._handleTextInput('password', e)
    _cPassInputChange = e => this._handleTextInput('cPassword', e)

    _handleSubmit = () => {
        const {old_password, password, cPassword} = trimObject(_.pick(this.state, ['old_password', 'password', 'cPassword']))
        
        if(old_password && isValidPassword(password) && cPassword && (old_password !== password)){
            if(password === cPassword){
                this.chnageLoadingState()
                this._handleRequest(old_password, password)
                this.setState({passwordErr: false, cPasswordErr: false})
            }
            else{
                this.setState({passwordErr: true, cPasswordErr: true})
                notify(notifyMsgs.PASS_NOT_MATCH)
            }
        }
        else{
            !old_password && this.setState({old_passwordErr: true})
            if(!isValidPassword(password)){
                this.setState({passwordErr: true})
                password && notify(notifyMsgs.PASS_LENGTH_ERR)
            }
            !cPassword && this.setState({cPasswordErr: true})
        }
    }

    _handleRequest = async (old_password, newPassword) => {
        try{
            await updatePassword(old_password, newPassword)
            notify(notifyMsgs.PASS_RESET_SUCCESS)
            this.setState({old_password: '', password: '', cPassword: ''})
            this.chnageLoadingState()
        }
        catch(e){
            if(e.response && e.response.status === 401){
                this.setState({old_passwordErr: true})
                notify(notifyMsgs.WRONG_PASS)
            }
            else notify(notifyMsgs.COMMON_ERR)
            this.chnageLoadingState()
        }
    }

    render(){
        return (
            <div className='epn-info-box g-flex g-round-corner' >
                <Input type='password' className='epn-margin-b' placeholder='Current password' onChange={this._oldPassInputChange} err={this.state.old_passwordErr} value={this.state.old_password} />
                <Input type='password' className='epn-margin-b' placeholder='New password' onChange={this._passInputChange} err={this.state.passwordErr} value={this.state.password} />
                <Input type='password' className='epn-margin-b' placeholder='Repeat new password' onChange={this._cPassInputChange} err={this.state.cPasswordErr} value={this.state.cPassword} />
                <Button name='Change password' style={{paddingLeft: 20, paddingRight: 20, marginTop: 10}} onClick={this._handleSubmit} loading={this.state.loading} />
            </div>
        )
    }
}

export default ChangePassword
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import {DoneCircleIcon} from '../../components/icons/icons'
import { Logo, Input, Button, notify } from '../../components/utility'
import { resetPassword } from '../../apis/apis'
import { notifyMsgs } from '../../common/constants'

class ResetPassword extends Component{
    state = {
        pass: '', cPass: '', passErr: false, cPassErr: false, loading: false, successScreen: false
    }

    setInputErr = attr => this.setState({[`${attr}Err`]: true})
    _hnadleInputChange = (event, attr) => this.setState({ [attr]: event.target.value, [`${attr}Err`]: false })
    changeLoadingState = () => this.setState(state => ({loading: !state.loading}))

    _handleSubmit = () => {
        const {pass, cPass} = this.state
        if(pass.trim() && cPass.trim()){
            if(pass.trim() === cPass.trim()) this.handleResetPassword()
            else{
                this.setInputErr('pass')
                this.setInputErr('cPass')
            }
        }
        else{
            !pass.trim() && this.setInputErr('pass')
            !cPass.trim() && this.setInputErr('cPass')
        }
    }

    handleResetPassword = async () => {
        this.changeLoadingState()
        try{
            await resetPassword(this.props.match.params.uuid, this.state.pass)
            this.setState({successScreen: true})
            notify(notifyMsgs.PASS_RESET_SUCCESS)
        }
        catch({response}){
            if(response.status === 404) notify(notifyMsgs.INVALID_PASS_RESET_URL)
            else notify(notifyMsgs.COMMON_ERR)
        }
        this.changeLoadingState()
    }

    render(){
        return (
            <div className='g-blu-screen-fill g-flex-ac' >
                <div className='g-sml-white-box g-round-corner' >
                    <Logo />
                    {!this.state.successScreen ?
                        <div style={{marginTop: 40}} >
                            <h3 className='g-roboto' >Reset Password</h3>
                            <p className='g-bsf-sub-text g-roboto' style={{marginBottom: 30}} >You have successfully verified your account. Now, set up your new password below.</p>
                            <Input className='auth-input' placeholder='New password' onChange={e => this._hnadleInputChange(e, 'pass')} err={this.state.passErr} type='password' />
                            <Input className='auth-input' placeholder='Confirm password' onChange={e => this._hnadleInputChange(e, 'cPass')} err={this.state.cPassErr} type='password'/>
                            <Button name='Reset my password' style={{width: '100%', marginTop: 20}} onClick={this._handleSubmit} loading={this.state.loading} />
                        </div>
                        :
                        <div style={{marginTop: 40}}>
                            <h3 className='g-roboto' >Done!!</h3>
                            <p className='g-bsf-sub-text g-roboto' style={{marginBottom: 30}} >Your new password has been updated successfully. Now you can login to your account with your new credentials.</p>                            
                            {/* <div className='g-flex-ac' style={{flexDirection: 'column'}} >
                                <DoneCircleIcon style={{width: 60, height: 60, opacity: 0.7}} />
                            </div> */}
                            <Link to='/auth'>
                                <Button name='Go to login' style={{width: '100%', marginTop: 20}} />
                            </Link>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default ResetPassword
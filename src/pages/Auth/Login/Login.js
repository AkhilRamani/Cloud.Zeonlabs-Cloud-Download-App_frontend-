import React from 'react'
import {Link} from 'react-router-dom'
import _ from 'lodash'

import './Login.styles.scss'
import { Button, Input } from '../../../components/utility';
import {loginUser} from '../../../apis/apis'
import {storeToken} from '../../../common/common.utils'

class Login extends  React.Component{

    state = {
        email: '', passowrd: '', loading: false
    }
    
    _handleInputChange = (event, property) => this.setState({ [property]: event.target.value })
    changeLoadingState = () => this.setState(state => ({loading: !state.loading}))

    _handleSubmit = () => {
        this.changeLoadingState()
        loginUser(_.pick(this.state, ['email', 'password']))
            .then(res => {
                console.log(res.data)
                storeToken(res.data.token)
                this.changeLoadingState()
                this.props.success()
            })
            .catch(e => console.log(e))
    }

    render(){
        return(
            <div className='login-box' >
                <div style={{marginBottom: 30}} >
                    <h3 className='g-roboto login-text' >Sign in</h3>
                    <p className='g-roboto login-sub-text' >Sign in to continue to the app</p>
                </div>
                <div className='g-flex-ac' style={{flexDirection: 'column'}} >
                    <Input type='text' placeholder='email' className='auth-input' onChange={event => this._handleInputChange(event, 'email')} />
                    <Input type='password' placeholder='passowrd' className='auth-input' onChange={event => this._handleInputChange(event, 'password')} />

                    <div className='g-flex-ac' style={{justifyContent: 'space-between', alignSelf: 'stretch'}} >
                        <div className='g-flex-ac' >
                            <Input type='checkbox' />
                            <p className='g-roboto login-sub-text'>Remember me</p>
                        </div>
                        <Link className='g-roboto login-f-pass' to='/' >Forgot password</Link>
                    </div>
                </div>
                <div className='login-btn-div' >
                    <Button name='Login' onClick={this._handleSubmit} style={{width: '100%'}} disabled={this.state.loading} loading={this.state.loading} />
                </div>
            </div>
        
        )
    }
}

export default Login
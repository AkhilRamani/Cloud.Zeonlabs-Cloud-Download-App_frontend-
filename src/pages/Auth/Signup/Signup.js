import React from 'react'
import {Link} from 'react-router-dom'
import _ from 'lodash'

import {Input, Button, notify} from '../../../components/utility'
import {PRIMARY_COLOR} from '../../../styles/color.theme'
import {createUser} from '../../../apis/apis'
import {storeToken} from '../../../common/common.utils'

class Signup extends React.Component{
    state = {
        f_name: '', l_name: '', email: '', password: '', cpassword: '', loading: false,
        f_nameErr: false, l_nameErr: false , emailErr: false, passowrdErr: false, cpasswordErr: false
    }

    _handleInputChange = (event, property) => {
        this.setState({
            [property]: event.target.value,
            [`${property}Err`]: false
        })
    }
    
    setInputErr = (property) => this.setState({[`${property}Err`]: true})
    changeLoadingState = () => this.setState(state => ({loading: !state.loading}))

    handleSignUP = () => {
        createUser(_.pick(this.state, 'f_name', 'l_name', 'email', 'password'))
            .then(res => {
                storeToken(res.data.token)
                this.changeLoadingState()
                this.props.success()
            })
            .catch(({response}) =>{
                switch(response.status){
                    case 409:
                        this.setInputErr('email')
                        notify('User already registred!')
                        break

                    default:
                        console.log(response)
                        notify('Something went wrong!')
                }
                this.changeLoadingState()
            })
    }

    _handleSubmit = () => {
        const {f_name, l_name, email, password, cpassword} = this.state

        !f_name.trim() && this.setInputErr('f_name')
        !l_name.trim() && this.setInputErr('l_name')
        !email.trim() && this.setInputErr('email')
        !password.trim() && this.setInputErr('password')
        !cpassword.trim() && this.setInputErr('cpassword')

        if(f_name.trim() && l_name.trim() && email.trim() && password.trim()){
            if(password.trim() === cpassword.trim()){
                this.changeLoadingState();
                this.handleSignUP()
            }
            else{
                console.log('password does not match')
                this.setInputErr('password')
                this.setInputErr('cpassword')
            }
        }
    }
    
    render(){
        return (
            <div className='login-box' >
                <div style={{marginBottom: 30}} >
                    <h3 className='g-roboto login-text' >Sign up</h3>
                    <p className='g-roboto login-sub-text' >Sign up to create account</p>
                </div>

                <div className='g-flex-ac' style={{flexDirection: 'column'}} >
                    <div className='g-flex-ac' >
                        <Input err={this.state.f_nameErr} style={{width: 140}} type='text' placeholder='First name' className='auth-input' onChange={e => this._handleInputChange(e, 'f_name')} />
                        <div style={{width: 30}} />
                        <Input err={this.state.l_nameErr} style={{width: 140}} type='text' placeholder='Last name' className='auth-input' onChange={e => this._handleInputChange(e, 'l_name')} />
                    </div>
                    <Input err={this.state.emailErr} type='text' placeholder='email' className='auth-input' onChange={e => this._handleInputChange(e, 'email')}/>
                    <Input err={this.state.passwordErr} type='password' placeholder='passowrd' className='auth-input' onChange={e => this._handleInputChange(e, 'password')}/>
                    <Input err={this.state.cpasswordErr} type='password' placeholder='Confirm password' className='auth-input' onChange={e => this._handleInputChange(e, 'cpassword')}/>

                    <p align='center' className='g-roboto login-sub-text' style={{fontSize: 13}} >By clicking Sign up you agree with the <Link to='/tandc' style={{color: PRIMARY_COLOR.P_BLUE}} >terms of use</Link>.</p>

                    <div className='login-btn-div' >
                        <Button name='Sign up' style={{width: '100%'}} onClick={this._handleSubmit} loading={this.state.loading} disabled={this.state.loading} />
                    </div>
                    
                </div>
            </div>
        )
    }
} 

export default Signup
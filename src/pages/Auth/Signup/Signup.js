import React from 'react'
import {Link} from 'react-router-dom'
import _ from 'lodash'

import {Input, Button} from '../../../components/utility'
import {PRIMARY_COLOR} from '../../../styles/color.theme'
import {createUser} from '../../../apis/apis'
import {storeToken} from '../../../common/common.utils'

class Signup extends React.Component{
    state = {
        name: '', email: '', password: '', cpassword: '', loading: false
    }

    _handleInputChange = (event, property) => {
        this.setState({
            [property]: event.target.value
        })
    }
    
    changeLoadingState = () => this.setState(state => ({loading: !state.loading}))

    _handleSubmit = () => {
        this.changeLoadingState()
        createUser(_.pick(this.state, 'name', 'email', 'password'))
            .then(res => {
                console.log(res.data)
                storeToken(res.data.token)
                this.changeLoadingState()
                this.props.success()
            })
            .catch(e => console.log(e))

    }
    
    render(){
        return (
            <div className='login-box' >
                <div style={{marginBottom: 30}} >
                    <h3 className='g-roboto login-text' >Sign up</h3>
                    <p className='g-roboto login-sub-text' >Sign up to create account</p>
                </div>

                <div className='g-flex-ac' style={{flexDirection: 'column'}} >
                    <Input type='text' placeholder='Full name' className='auth-input' onChange={e => this._handleInputChange(e, 'name')} />
                    <Input type='text' placeholder='email' className='auth-input' onChange={e => this._handleInputChange(e, 'email')}/>
                    <Input type='password' placeholder='passowrd' className='auth-input' onChange={e => this._handleInputChange(e, 'password')}/>
                    <Input type='password' placeholder='Confirm password' className='auth-input' onChange={e => this._handleInputChange(e, 'cpassword')}/>

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
import React from 'react'
import { Button } from '../../components/utility';

import './Login.styles.scss'

const Login = (props) => {
    return(
        <div className='login-main-container g-flex-ac' >
            <div className='login-box g-round-corner' >
                <h3>Login Page</h3>
                <input className='g-input' type='text' />
                <Button name='Login' onClick={() => props.history.replace('/') } />
            </div>
        </div>
    )
}

export default Login
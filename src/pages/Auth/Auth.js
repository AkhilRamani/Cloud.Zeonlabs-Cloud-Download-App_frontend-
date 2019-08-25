import React, {useState} from 'react'

import './Auth.styles.scss'
import {Logo} from '../../components/utility'
import Login from './Login/Login'
import Signup from './Signup/Signup'

const Auth = ({history}) => {
    const [authToggle, setAuthToggle] = useState(true)

    const _success = () => history.replace('/')

    return (
        <div className='auth-main-container g-flex-ac'>
            <div className='auth-box g-round-corner' >
                <div className='g-flex-ac' >
                    <Logo />
                    <button className='auth-toggle-btn' onClick={() => setAuthToggle(!authToggle)} >{authToggle ? 'Sign up': 'Sign in'}</button>
                </div>
                {authToggle ? <Login success={_success} />
                            : <Signup success={_success} />
                }
            </div>
        </div>
    )
}

export default Auth
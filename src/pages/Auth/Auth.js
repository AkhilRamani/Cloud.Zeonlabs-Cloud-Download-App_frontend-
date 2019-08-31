import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'

import './Auth.styles.scss'
import {Logo, LoadingBar} from '../../components/utility'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import {isAuthenticated} from '../../common/common.auth'

const Auth = ({history}) => {
    const [authToggle, setAuthToggle] = useState(true)
    const [loading, setLoading] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)

    const _success = () => history.replace('/')

    const setAuthenticatedState = () => {
        setLoading(false)
        setLoggedIn(true)
    }

    useEffect(()=> {
        isAuthenticated() ? setAuthenticatedState() : setLoading(false)
    }, [])

    return (<div className='auth-main-container g-flex-ac'>
            {loading ? <LoadingBar style={{margin: 'auto'}} />
            : (
                loggedIn ? <Redirect to='/' />
            
                 :(<div className='auth-box g-round-corner' >
                    <div className='g-flex-ac' style={{justifyContent: 'space-between'}} >
                        <Logo />
                        <button className='auth-toggle-btn' onClick={() => setAuthToggle(!authToggle)} >{authToggle ? 'Sign up': 'Sign in'}</button>
                    </div>
                    {authToggle ? <Login success={_success} />
                                : <Signup success={_success} />
                    }
                </div>)
            )
        }
    </div>)
}

export default Auth
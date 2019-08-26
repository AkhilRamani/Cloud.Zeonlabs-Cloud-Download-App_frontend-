import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isAuthenticated} from './common/common.auth'

const ProtectedRoute = ({ component: Component, ...rest }) => {

    return (
        <Route {...rest} render={(props) => (
            isAuthenticated() === true ? 
                <Component {...props} /> 
                :
                <Redirect to={{ pathname: '/auth', state: { from: props.location }}} />   
        )} />
    )
}

export {ProtectedRoute}
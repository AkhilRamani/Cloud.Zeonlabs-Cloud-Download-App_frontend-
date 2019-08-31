import React, {useState} from 'react'
import {ProfilePic} from '../utility'
import {store} from '../../redux/Store'


//**This Component is Just for development test purpose */
const Avatar = ({user, className ,...rest}) => {
    const [state, setState] = useState({user: null})

    const unsubscribe = store.subscribe(() => console.log(setState(store.getState())))

    return (
        !state.user ? 
            <div className={`g-sklton-line h-pro-pic g-sklton-color ${className}`} 
                style={{height: 45, width: 45, borderRadius: '50%'}} {...rest}
            />
            : (
                state.user.avatar ?
                    <ProfilePic src={state.user.avatar} className={className} {...rest} />
                    :
                    <ProfilePic text={'AK'} className={className} {...rest} />)
    )
}

export default Avatar
import React, { useState } from 'react'

import './ActivateAccount.styles.scss'
import { storeToken } from '../../common/common.utils'
import {Button, Logo, notify} from '../../components/utility'
import {VerifiedUserIcon} from '../../components/icons/icons'
import {PRIMARY_COLOR} from '../../styles/color.theme'
import {activateUser} from '../../apis/apis'
import {notifyMsgs} from '../../common/constants'

/**
 * 
 * Auth page's styles used 
 */
const ActivateAccount = (props) => {
    const [loading, setLoading] = useState(false)

    const changeLoadingState = () => setLoading(!loading)

    const handleActivation = () => {
        changeLoadingState()
        activateUser(props.match.params.uuid)
            .then(res => {
                console.log(res.data)
                storeToken(res.data.token)
                changeLoadingState()
                notify(notifyMsgs.ACTIVATED_MSG)
                props.history.replace('/')
            })
            .catch(e =>{
                console.log(e)
                setLoading(false)
                notify(notifyMsgs.INVALID_ACTI_URL)
            })
    }

    return (
        <div className='auth-main-container g-flex-ac'>
            <div className='auth-box g-round-corner' style={{maxWidth: 361}} >
                <Logo/>
                <h3 style={{paddingTop: 10}} >Activate your account</h3>
                <div className='g-flex-ac' style={{flexDirection: 'column', padding: 20}} >
                    <VerifiedUserIcon style={{ width: 70, height: 70, opacity: 0.9}} />
                </div>
                <p className='g-roboto acti-ac-sub-text' ><font className='acti-ac-sub-text-highlight' style={{color: PRIMARY_COLOR.P_BLUE}} >Thank you for signing up.</font> Now please click on the below button to activate your account. It only takes a few seconds to setup.</p>
                <Button name='Activate my account' style={{width: '100%', marginTop: 30}} onClick={handleActivation} loading={loading} />
            </div>
        </div>
    )
}

export default ActivateAccount
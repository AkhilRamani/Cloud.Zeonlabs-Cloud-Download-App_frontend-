import React, { useState } from 'react'

import './ActivateAccount.styles.scss'
import { storeToken } from '../../common/common.utils'
import {Button, Logo, notify} from '../../components/utility'
import {PRIMARY_COLOR} from '../../styles/color.theme'
import {activateUser} from '../../apis/apis'
import {notifyMsgs, routes} from '../../common/constants'
import { fetchProfile } from '../../apis/sendRequest.api'

const ActivateAccount = (props) => {
    const [loading, setLoading] = useState(false)

    const changeLoadingState = () => setLoading(!loading)

    const handleActivation = () => {
        changeLoadingState()
        activateUser(props.match.params.uuid)
            .then(res => {
                storeToken(res.data.token)
                changeLoadingState()
                fetchProfile()
                notify(notifyMsgs.ACTIVATED_MSG)
                props.history.replace(routes.APP)
            })
            .catch(e =>{
                setLoading(false)
                if(e.response && e.response.status === 404) notify(notifyMsgs.INVALID_ACTI_URL)
                else notify(notifyMsgs.COMMON_ERR)
            })
    }

    return (
        <div className='g-blu-screen-fill g-flex-ac'>
            <div className='g-sml-white-box g-round-corner' style={{maxWidth: 361}} >
                <Logo/>
                <h3 style={{margin: '40px 0 8px 0', padding: 0}} >Just one more step...</h3>
                <p className='g-roboto acti-ac-sub-text' ><font className='acti-ac-sub-text-highlight' style={{color: PRIMARY_COLOR.P_BLUE}} >Thank you for signing up.</font> Now please click on the below button to activate your account. It only takes a few seconds to setup.</p>
                <Button name='Activate my account' style={{width: '100%', marginTop: 35}} onClick={handleActivation} loading={loading} />
            </div>
        </div>
    )
}

export default ActivateAccount
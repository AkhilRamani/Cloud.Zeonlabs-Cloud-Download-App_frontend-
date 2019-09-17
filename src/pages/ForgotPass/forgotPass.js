import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Logo, Input, Button, notify } from '../../components/utility'
import { forgotPasswordReq } from '../../apis/apis'
import { notifyMsgs } from '../../common/constants'

const ForgotPass = () => {
    const [reqSentScreen, setReqSentScreen] = useState(false)
    const [email, setEmail] = useState('')
    const [emailErr, setEmailErr] = useState(false)
    const [loading, setLoading] = useState(false)

    const _handleInputChange = e => {
        setEmail(e.target.value)
        setEmailErr(false)
    }

    const _handleSubmit = () => {
        if(email.trim()){
            setLoading(true)
            forgotPasswordReq(email)
            .then(res => {
                setLoading(false)
                setReqSentScreen(true)
                notify(notifyMsgs.FORGOT_PASS_REQ_SENT)
            })
            .catch(e => {
                if(e.response.status === 404){
                    setEmailErr(true)
                    notify(notifyMsgs.EMAIL_NOT_FOUND)
                }
                else notify(notifyMsgs.COMMON_ERR)
                setLoading(false)
            })
        }
        else{
            setEmailErr(true)
        }
    }

    return (
        <div className='g-blu-screen-fill g-flex-ac' >
            <div className='g-sml-white-box g-round-corner' >
                <Logo/>
                {!reqSentScreen ?
                    <div>
                        <div style={{margin: '40px 0 30px'}} >
                            <h3 className='g-roboto' >Forgot Password</h3>
                            <p className='g-bsf-sub-text g-roboto'>Type your email you registred to Zeonlabs. We will send you an email with password reset url.</p>
                        </div>
                        <Input err={emailErr} placeholder='Email' type='text' value={email} onChange={_handleInputChange} />
                        <Button name='Send me email' style={{width: '100%', margin: '30px 0 15px'}} onClick={_handleSubmit} loading={loading} disabled={loading} />
                        <div className='g-flex-ac' style={{flexDirection: 'column'}} >
                            <p className='g-roboto g-bsf-sub-text' style={{fontSize: 13}} >Did you remember your password? <Link className='link' to='/auth' >Try logging in</Link></p>
                        </div>
                    </div>
                    :
                    <div style={{margin: '40px 0 10px'}} >
                        <h3 className='g-roboto' >Request sent</h3>
                        <p className='g-bsf-sub-text g-roboto' style={{marginBottom: 30}} >Check your inbox. The password reset email has been sent to {email}</p>
                        <Link to='/auth'><Button name='Go to login page' style={{width: '100%'}} /></Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default ForgotPass
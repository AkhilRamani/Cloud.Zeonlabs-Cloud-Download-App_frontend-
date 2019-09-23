import React from 'react'
import { Input, Button } from '../../../utility'

const ChangePassword = () => {
    return (
        <div className='epn-info-box g-flex g-round-corner' >
            <Input type='password' className='epn-margin-b' placeholder='Current password'  />
            <Input type='password' className='epn-margin-b' placeholder='New password'/>
            <Input type='password' className='epn-margin-b' placeholder='Repeat new password'/>
            <Button name='Change password' style={{paddingLeft: 20, paddingRight: 20, marginTop: 10}} />
        </div>
    )
}

export default ChangePassword
import React from 'react'
import { Input, Button } from '../../../utility'

const ChangePassword = () => {
    return (
        <div className='epn-info-box g-round-corner' >
            <div className='epn-pi-box' >
                    <div className='epn-pi-l-box' >
                        <Input type='password' placeholder='Current password'  />
                    </div>
                    <div style={{width: 20}} />
                    <div className='epn-pi-r-box' >
                        <Input type='password' className='epn-margin-b' placeholder='New password'/>
                        <Input type='password' className='epn-margin-b' placeholder='Repeat new password'/>
                        <Button name='Change password' style={{paddingLeft: 20, paddingRight: 20, marginTop: 10}} />
                    </div>
                </div>
        </div>
    )
}

export default ChangePassword
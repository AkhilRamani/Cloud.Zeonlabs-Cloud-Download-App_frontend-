import React, { Component } from 'react'
import { Input, Button } from '../../../utility'

class PersonalInfo extends Component{

    render(){
        return (
            <div className='epn-info-box g-round-corner' >
                <div className='g-flex-ac epn-pi-box' >
                    <div className='epn-pi-l-box' >
                        <Button name='Check' />
                    </div>
                    <div className='epn-pi-r-box' >
                        <div className='g-flex-ac epn-margin-b' >
                            <Input value='Akhil' />
                            <div style={{width: 40}} />
                            <Input value='Ramani' />
                        </div>
                        <Input value='ramaniakhil094@gmail.com' disabled className='epn-margin-b' />
                        <Button name='Update name' style={{paddingLeft: 20, paddingRight: 20, marginTop: 10}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalInfo
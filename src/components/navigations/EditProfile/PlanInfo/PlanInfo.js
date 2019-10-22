import React from 'react'
import { Button } from '../../../utility'
import { RoundYelloIcon } from '../../../icons/round.icon'

const PlanInfo = () => {
    return (
        <div className='epn-plan-info-box g-round-corner g-flex-ac' >
            <div className='g-flex-ac' >
                <RoundYelloIcon size={20} />
                <h3 className='g-roboto' >Free Sandbox</h3>
                {/* <Label title='Free Sandbox' /> */}
            </div>
            <Button  name='Upgrade' />
        </div>
    )
}

export default PlanInfo
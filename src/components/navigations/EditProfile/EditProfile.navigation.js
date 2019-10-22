import React from 'react'

import './EditProfile.styles.scss'
import {withRouter} from 'react-router-dom'
import { NavHeader} from '../../utility'
import { routes } from '../../../common/constants'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import ChangePassword from './ChangePassword/ChangePassword'
import PlanInfo from './PlanInfo/PlanInfo'

const EditProfileNavigation = props => (
    <div style={{padding: 20}} >
        <NavHeader 
            title='edit profile' 
            onBackClick={() => props.history.push(routes.APP) }
            style={{marginBottom: 20}}
        />

        <div className='epn-conatiner g-flex' >
            
            <>
                <h4 className='g-roboto epn-ib-title'>My Plan</h4>
                <PlanInfo />
            </>
            <div className='g-flex' >
                <div className='epn-sub-catagory' >
                    <h4 className='g-roboto epn-ib-title' >Personal info</h4>
                    <PersonalInfo />
                </div>
                <div style={{width: 30}} />
                <div className='epn-sub-catagory' >
                    <h4 className='g-roboto epn-ib-title' >Change password</h4>
                    <ChangePassword />
                </div>
            </div>
        </div>
    </div>
)

export default withRouter(EditProfileNavigation)
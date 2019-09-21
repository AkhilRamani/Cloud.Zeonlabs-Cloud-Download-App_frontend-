import React from 'react'

import './EditProfile.styles.scss'
import {withRouter} from 'react-router-dom'
import { NavHeader} from '../../utility'
import { routes } from '../../../common/constants'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import ChangePassword from './ChangePassword/ChangePassword'

const EditProfileNavigation = props => (
    <div style={{padding: 20}} >
        <NavHeader 
            title='edit profile' 
            onBackClick={() => props.history.push(routes.APP) }
            style={{marginBottom: 20}}
        />
        <div className='epn-conatiner' >
            <h4 className='g-roboto epn-ib-title' >Personal info</h4>
            <PersonalInfo />
        </div>
        <div className='epn-conatiner' >
            <h4 className='g-roboto epn-ib-title' >Change password</h4>
            <ChangePassword />
        </div>
    </div>
)

export default withRouter(EditProfileNavigation)
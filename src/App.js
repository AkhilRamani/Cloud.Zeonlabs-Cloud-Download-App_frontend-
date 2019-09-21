import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './styles/global.styles.scss'
import ReduxWrapper from './redux/ReduxWrapper'
import MainApp from './pages/MainApp/MainApp'
import Auth from './pages/Auth/Auth'
import ActivateAccount from './pages/VerifyEmail/ActivateAccount'
import {ProtectedRoute} from './ProtectedRoute'
import ForgotPass from './pages/ForgotPass/forgotPass';
import ResetPassword from './pages/ForgotPass/ResetPassword';
import EditProfile from './pages/EditProfile/EditProfile';

function App() {
  	return (
  		<ReduxWrapper>
			<Switch>
				<ProtectedRoute path='/' exact component={MainApp} />
				<Route path='/auth' exact component={Auth} />
				<Route path='/req=reset-pass' exact component={ForgotPass} />
				<Route path='/reset/pass/:uuid' exact component={ResetPassword} />
				<Route path='/activate/:uuid' exact component={ActivateAccount} />
				<Route path='/tandc' exact component={Auth} />

				<ProtectedRoute path='/edit/profile' exact component={EditProfile} />

				<Route component={() => <h3>Not found</h3>} />

			</Switch>
		</ReduxWrapper>
  	);
}

export default App;

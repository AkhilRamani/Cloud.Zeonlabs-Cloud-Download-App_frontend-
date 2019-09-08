import React from 'react';
import ReduxWrapper from './redux/ReduxWrapper'
import {Route, Switch} from 'react-router-dom'

import MainApp from './pages/MainApp'
import Auth from './pages/Auth/Auth'
import ActivateAccount from './pages/VerifyEmail/ActivateAccount'
import {ProtectedRoute} from './ProtectedRoute'

function App() {
  	return (
  		<ReduxWrapper>
			<Switch>
				<ProtectedRoute path='/' exact component={MainApp} />
				<Route path='/auth' exact component={Auth} />
				<Route path='/activate/:uuid' exact component={ActivateAccount} />
				<Route path='/tandc' exact component={Auth} />
				<Route component={() => <h3>Not found</h3>} />
			</Switch>
		</ReduxWrapper>
  	);
}

export default App;

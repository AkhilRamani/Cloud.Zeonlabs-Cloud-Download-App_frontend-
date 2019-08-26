import React from 'react';
import ReduxWrapper from './redux/ReduxWrapper'
import {Route, Switch} from 'react-router-dom'

import MainApp from './pages/MainApp'
import Auth from './pages/Auth/Auth'
import {ProtectedRoute} from './ProtectedRoute'

function App() {
  	return (
  		<ReduxWrapper>
			<Switch>
				<ProtectedRoute path='/' exact component={MainApp} />
				<Route path='/auth' exact component={Auth} />
				<Route path='/tandc' exact component={Auth} />
				<Route component={() => <h3>Not found</h3>} />
			</Switch>
		</ReduxWrapper>
  	);
}

export default App;

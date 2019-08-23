import React from 'react';
import ReduxWrapper from './redux/ReduxWrapper'
import {Route} from 'react-router-dom'

import MainApp from './pages/MainApp'
import Login from './pages/Login/Login'

function App() {
  	return (
  		<ReduxWrapper>
            <Route path='/' exact component={MainApp} />
            <Route path='/login' exact component={Login} />
		</ReduxWrapper>
  	);
}

export default App;

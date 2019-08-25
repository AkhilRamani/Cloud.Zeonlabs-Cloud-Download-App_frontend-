import React from 'react';
import ReduxWrapper from './redux/ReduxWrapper'
import {Route} from 'react-router-dom'

import MainApp from './pages/MainApp'
import Auth from './pages/Auth/Auth'

function App() {
  	return (
  		<ReduxWrapper>
            <Route path='/' exact component={MainApp} />
            <Route path='/auth' exact component={Auth} />
            <Route path='/tandc' exact component={Auth} />
		</ReduxWrapper>
  	);
}

export default App;

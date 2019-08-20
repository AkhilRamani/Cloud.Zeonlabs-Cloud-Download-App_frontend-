import React from 'react';
import MainApp from './pages/MainApp'
import ReduxWrapper from './redux/ReduxWrapper'

function App() {
  return (
    <ReduxWrapper element={<MainApp />} />
  );
}

export default App;

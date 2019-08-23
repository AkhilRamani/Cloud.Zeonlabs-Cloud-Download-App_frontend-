import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import {rootReducer} from './rootReducer';

const createStore = () => reduxCreateStore(rootReducer);

export default (props) => (
  <Provider store={createStore()}>{props.children}</Provider>
);
import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';

import configureStore from './app/store/configureStore';
import Root from './app/containers/Root';

const store = configureStore({});

render(
  <Root store={store} />,
  document.getElementById('app-container')
);

console.log('foo')

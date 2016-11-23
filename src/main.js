import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';

import Root from './app/containers/Root';

const store = {}

render(
  <Root store={store} />,
  document.getElementById('app-container')
);

console.log('foo')

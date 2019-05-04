import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createAppStore from '../src/app/core/store';

import RootRouter from './app/views/RootRouter';
import * as serviceWorker from './serviceWorker';

const store = createAppStore();

ReactDOM.render(
  <Provider store={store}>
    <RootRouter />
  </Provider>,
  document.getElementById('reactApp'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

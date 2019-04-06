import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import appStore from './redux';
import { initFocusRing } from './utils/scripts/focusRing';
import { App } from './components/_App';

initFocusRing();

render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

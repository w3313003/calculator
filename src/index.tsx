import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import reducer from './redux/index';

declare global {
	interface Window {
		[property: string]: any;
	}
}
const reduxDevTools = window.devToolsExtension;
const store = createStore(
  reducer,
  compose(applyMiddleware(logger), reduxDevTools())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

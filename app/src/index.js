import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './css/main.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import configureAppStore from './redux';

const store = configureAppStore();

const renderApp = () => (
  render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/App', renderApp)
}

renderApp();

serviceWorker.unregister();
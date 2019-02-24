import React from 'react';
import ReactDOM from 'react-dom';
import store from './Store/store';
import { Provider } from 'react-redux';
import './index.css';
import AppRouter from './Components/Routers/AppRouter';
import * as serviceWorker from './serviceWorker';

const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
ReactDOM.render(jsx, document.getElementById('root'));

serviceWorker.unregister();

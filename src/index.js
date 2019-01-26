import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AppRouter from './Components/Routers/AppRouter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

serviceWorker.unregister();

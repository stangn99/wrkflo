import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './Components/Routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import moment from 'moment';

var setDays = [ 1, 1, 4, 4, 4, 8, 8 ],
    nextDay = moment().day( setDays[moment().day()] );
console.log(nextDay._d)


ReactDOM.render(<AppRouter />, document.getElementById('root'));

serviceWorker.unregister();

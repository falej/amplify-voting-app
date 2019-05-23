/* react */
import React from 'react';
/* react-dom */
import ReactDOM from 'react-dom';
/* app */
import App from './components/App';
import * as serviceWorker from './serviceWorker';
/* css */
import './assets/css/styles.css';
import './semantic/dist/semantic.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

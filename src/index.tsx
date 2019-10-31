import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import * reducers from './ducks';

const store = createStore(combineReducers({
    ...reducers,
}));
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App /></Router>
    </Provider>
,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

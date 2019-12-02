import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import posts from './reducers/getBlogPosts.js'
import { Provider } from 'react-redux'
// import { Route, Link, BrowserRouter as Router ,Switch } from 'react-router-dom'
// import BlogAll from './containers/BlogAll.js'
// import LeftDrawer from './components/LeftDrawer'
import { composeWithDevTools } from 'redux-devtools-extension';
// import { combineReducers } from 'redux'

const store = createStore(posts, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store} >
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

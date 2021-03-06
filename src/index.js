import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.scss'
import rootReducer from './reducers/rootReducer.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'))

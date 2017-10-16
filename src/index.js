import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/style.css';
import App from './components/app';
import reducers from './reducers';
import Async from './middlewares/async';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>,
    document.querySelector('.container')
);

registerServiceWorker();

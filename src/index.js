import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root-saga.js';
import rootReducer from './reducers/root-reducer.js';

//Create saga middleware
const sagaMiddleware = createSagaMiddleware();
//mount it on the "store"
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

//then Run the saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

//registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/reduser';
import { Navigator } from './navigation/Navigator';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Navigator />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

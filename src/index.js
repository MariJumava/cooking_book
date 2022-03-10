import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/reduser';
import { Navigator } from './navigation/Navigator';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Navigator />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {createStore} from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

module.hot.accept();		//development mode only
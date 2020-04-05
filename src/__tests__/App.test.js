import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App/App';
import {createStore} from 'redux';

describe('App', () => {
  const reducer = (state = {}, action) => {
    switch(action.type){
    default:
      return state;
    }
  };
  const store = createStore(reducer);
  
  it('render App without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App store={store}/>, div);
  });       
});
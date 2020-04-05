import React from 'react';
import ReactDOM from 'react-dom';
import Display from '../components/Display/Display';

describe('Display', () => {  
  it('render Display without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display data={{expression:'', btn:'+'}}/>, div);
  });       
});
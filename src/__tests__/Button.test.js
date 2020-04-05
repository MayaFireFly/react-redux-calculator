import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../components/Button/Button';

describe('Button', () => {
  const btnAction = () => {
    console.log('BTN action');  
  };
  const btnExpr = () => {
    console.log('BTN expr');  
  }; 
  it('render Button without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button title='+' btnAction={btnAction} id='plus' btnExpr={btnExpr}/>, div);
  });       
});
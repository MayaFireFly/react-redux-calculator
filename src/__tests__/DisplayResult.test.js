import React from 'react';
import ReactDOM from 'react-dom';
import DisplayResult from '../components/DisplayResult/DisplayResult';

describe('DisplayResult', () => {  
  it('render DisplayResult without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DisplayResult data={{expression:'', btn:'+'}}/>, div);
  });       
});
import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import Button from '../Button/ButtonContainer';
import Display from '../Display/DisplayContainer';
import DisplayResult from '../DisplayResult/DisplayResultContainer';

class App extends React.Component{
  constructor(props){
    super(props);    
  }
  render(){
    return <Provider store={this.props.store}>
      <div className='App App__col App_border App__row_center'>
        
        <div className='App__col App__col_w-100'>
          <div className='App__row' id='display'>
            <div className='App__col App__col_w-100'>
              <DisplayResult/>
            </div>            
          </div>
          <div className='App__row'>
            <div className='App__col App__col_w-100'>
              <Display/>
            </div>            
          </div>
        </div>        

        <div className='App__col App__col_w-100'>

          <div className='App__row'>
            <div className='App__col App__col_w-50'><Button id='clear' title='C'/></div>
            <div className='App__col App__col_w-50'><Button id='equals' title='='/></div>
          </div>

          <div className='App__row'>
            <div className='App__col App__col_w-25'><Button id='seven' title='7'/></div>
            <div className='App__col App__col_w-25'><Button id='eight' title='8'/></div>
            <div className='App__col App__col_w-25'><Button id='nine' title='9'/></div>
            <div className='App__col App__col_w-25'><Button id='subtract' title='-'/></div>
          </div>

          <div className='App__row'>
            <div className='App__col App__col_w-25'><Button id='four' title='4'/></div>
            <div className='App__col App__col_w-25'><Button id='five' title='5'/></div>
            <div className='App__col App__col_w-25'><Button id='six' title='6'/></div>
            <div className='App__col App__col_w-25'><Button id='add' title='+'/></div>
          </div>

          <div className='App__row'>
            <div className='App__col App__col_w-25'><Button id='one' title='1'/></div>
            <div className='App__col App__col_w-25'><Button id='two' title='2'/></div>
            <div className='App__col App__col_w-25'><Button id='three' title='3'/></div>
            <div className='App__col App__col_w-25'><Button id='divide' title='/'/></div>
          </div>

          <div className='App__row'>
            <div className='App__col App__col_w-50'><Button id='zero' title='0'/></div>
            <div className='App__col App__col_w-25'><Button id='decimal' title='.'/></div>
            <div className='App__col App__col_w-25'><Button id='multiply' title='*'/></div>
          </div>
        </div>

      </div>
    </Provider>;
  }
}

App.propTypes = {
  store:PropTypes.object.isRequired
};

export default App;
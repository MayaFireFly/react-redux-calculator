import React, {useState, useEffect} from 'react';
import './DisplayResult.css';
import PropTypes from 'prop-types';

const DisplayResult = (props) => {
  const data = props.data;
  const btnExpr = props.btnExpr;  
  const setResult = props.setResult;
  const [values, setValues] = useState([]);

  const checkDigit = (symbol) => {
    return /\d|\./.test(symbol);
  };

  const prepareSecondDot = (expression) => {
    if(expression[expression.length - 1] == '.'){
      if(expression.substr(0, expression.length - 1).includes('.')){
        btnExpr(expression.substr(0, expression.length - 1));
      }
    }
  };

  useEffect(
    ()=>{      
      if(data.expression == ''){               
        setValues([]);        
      }else if(checkDigit(data.expression[data.expression.length - 1])){
        setResult(data.expression);        
      }else{
        prepareSecondDot(data.expression);        
        if(values.length <= 0){
          setValues([data.expression.substr(0, data.expression.length - 1), data.expression[data.expression.length - 1]]);          
          setResult(data.expression.substr(0, data.expression.length - 1));        
        }else{
          const separator = /(\+|\-|\/|\*|=)/;
          let vals = data.expression.split(separator);          
          vals = vals.filter((val) => val != '');          
          setValues(vals);
          setResult(vals[vals.length - 1]);          
        }       
      }
    }, 
    [data.expression]
  );

  const prepareResult = (vals) => {
    
    let result = Number(!isNaN(vals[0]) ? vals[0] : vals[0] == '-' ? -vals[1] : 0);
    
    for(let val_id = 1; val_id < vals.length; val_id++){

      if(isNaN(vals[val_id]) && vals[val_id + 1]){
        
        if(!isNaN(vals[val_id + 1])){          
          switch(vals[val_id]){
          case '+':
            result += Number(vals[val_id + 1]);
            break;
          case '-':
            result -= Number(vals[val_id + 1]);
            break;
          case '*':
            result *= Number(vals[val_id + 1]);
            break;
          case '/':
            result /= Number(vals[val_id + 1]);
            break;  
          }
        }else{
          if(vals[val_id + 1] == '-' && vals[val_id + 2] && !isNaN(vals[val_id + 2])){            
            switch(vals[val_id]){
            case '+':
              result += Number(-vals[val_id + 2]);
              break;
            case '-':
              result -= Number(-vals[val_id + 2]);
              break;
            case '*':
              result *= Number(-vals[val_id + 2]);
              break;
            case '/':
              result /= Number(-vals[val_id + 2]);
              break;  
            }
            val_id++;
          }
        } 

      }

    }
    return result;
  };

  useEffect(
    ()=>{
      if(values.length > 0 && data.expression[data.expression.length - 1] == '='){ 
        let resultNumber = prepareResult(values.slice(0, values.length - 1));       
        let resultStr = resultNumber.toString();
        if(resultStr.indexOf('.') > -1 && resultStr.substr(resultStr.indexOf('.'), resultStr.length - 1).length > 5){
          resultNumber = resultNumber.toFixed(5);
        }              
        setResult(resultNumber);
        btnExpr('C');
        setValues([]);
      }
    }, 
    [values]
  );

  return <div className='DisplayResult'>     
    {data.result}    
  </div>;
};

DisplayResult.propTypes = {
  data:PropTypes.object.isRequired
};

export default DisplayResult;
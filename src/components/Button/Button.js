import React, {useState, useEffect} from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  const btnTitle = props.title;
  const btnAction = props.btnAction;
  const btnExpr = props.btnExpr;
  const btnId = props.id;
  const [classname, setClassname] = useState(['Button']);

  useEffect(
    () => {
      switch(btnTitle){
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        setClassname([...classname, 'Button_padding-top']);    
        break;  
      case '/':
      case '+':
      case '-':
        setClassname([...classname, 'Button_padding-top', 'Button__controls']);    
        break;
      case '.':
        setClassname([...classname, 'Button_decimal-padding']);    
        break;
      case 'C':
        setClassname([...classname, 'Button_border-left-top', 'Button_padding-top', 'Button__controls']);    
        break;
      case '=':
        setClassname([...classname, 'Button_border-right-top', 'Button_padding-top', 'Button__equals']);    
        break;
      case '0':
        setClassname([...classname, 'Button_border-left-bottom', 'Button_padding-top']);    
        break;
      case '*':
        setClassname([...classname, 'Button_border-right-bottom', 'Button_padding-top', 'Button__controls']);    
        break; 
      default:
        break;   
      }
    }, 
    []
  );
  
  const clickButton = (btn) => {
    btnAction(btnTitle);
    btnExpr(btnTitle);
    if(btn.classList.contains('Button__equals')){
      btn.classList.add('Button_active_equals');
      setTimeout(() => {
        btn.classList.remove('Button_active_equals');
      }, 150);
    }else{
      btn.classList.add('Button_active');
      setTimeout(() => {
        btn.classList.remove('Button_active');
      }, 150);
    }    
  };
  
  return <div className={classname.join(' ').toString()} id={btnId} onClick={(e)=>clickButton(e.target)}>
    {btnTitle}
  </div>;
};

Button.propTypes = {
  title:PropTypes.string.isRequired,
  btnAction:PropTypes.func.isRequired,
  btnExpr:PropTypes.func.isRequired,
  id:PropTypes.string.isRequired
};

export default Button;
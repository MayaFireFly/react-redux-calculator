import {connect} from 'react-redux';
import Button from './Button';

const setActiveBtn = (btn) => {
  return {
    type:'ACTIVE',
    btn:btn
  };
};

const setExpression = (expr) => {
  return {
    type:'EXPR',
    expr:expr
  };
};


const setResult = (value) => {
  return {
    type:'RESULT',
    result:value
  };
};
  
const mapDispatchToProps = (dispatch) => {
  return {
    btnAction: (btn)=>dispatch(setActiveBtn(btn)),
    btnExpr: (expr)=>dispatch(setExpression(expr)),
    setResult: (value)=>dispatch(setResult(value))
  };
};

export default connect(null, mapDispatchToProps)(Button);
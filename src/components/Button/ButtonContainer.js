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
  
const mapDispatchToProps = (dispatch) => {
  return {
    btnAction: (btn)=>dispatch(setActiveBtn(btn)),
    btnExpr: (expr)=>dispatch(setExpression(expr))
  };
};

export default connect(null, mapDispatchToProps)(Button);
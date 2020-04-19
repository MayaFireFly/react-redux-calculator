import {connect} from 'react-redux';
import DisplayResult from './DisplayResult';

const mapStateToProps = (state) => {
  return {
    data:state
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
    btnExpr: (expr)=>dispatch(setExpression(expr)),
    setResult: (value)=>dispatch(setResult(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayResult);
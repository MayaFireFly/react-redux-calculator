const initialState = {
  btn:'0',
  expression:'',
  result: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type){  
  case 'ACTIVE':      
    return Object.assign({}, state, {btn:action.btn});
  case 'EXPR':
    if(action.expr == 'C'){
      return Object.assign({}, state, {expression:''});
    }else{
      return Object.assign({}, state, {expression:state.expression + action.expr});
    }
  case 'RESULT':
    return Object.assign({}, state, {result:action.result});                
  default:
    return state;
  }
};

export default reducer;
const initialState = {
  btn:'0',
  expression:''
};

const reducer = (state = initialState, action) => {
  switch(action.type){  
  case 'ACTIVE':      
    return Object.assign({}, state, {btn:action.btn});
  case 'EXPR':
    return Object.assign({}, state, {expression:state.expression + action.expr});             
  default:
    return state;
  }
};

export default reducer;
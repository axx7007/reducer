import React, {useState, useReducer} from 'react'
import {Container} from './AppStyle'
function App() {
 
  const reducer=(state, action)=>{
    switch(action.type){
      case "decrement": return state-1;
      case "increment": return state+1;
      default: return  state
    }
  }
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <Container>
      <button onClick={()=>dispatch({type: "decrement"})}>-</button>
      <h2>{count}</h2>  
      <button onClick={()=>dispatch({type: "increment"})}>+</button>
    </Container>
  );
}

export default App;

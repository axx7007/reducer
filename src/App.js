import React, {useState, useReducer} from 'react'
import {Container} from './AppStyle'
import Todo from './Todo'

function App() {
  
  const reducer=(state, action)=>{
    switch(action.type){
      case 'add': return [...state, {id: Date.now(), name:action.payload.name, completed: false}];
      default: return state;
    }
  }
  
  
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);
  const handleSubmit=()=>{
    dispatch({type:"add", payload:{name:name}})
    setName('');
  }
  return (
    <Container>
      <input type="text" onChange={(e)=>setName(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      {todos.map((value, index)=>{
        return(
          <div>
            <Todo value={value} />

          </div>
            ) 
      })}

    </Container>
  );
}

export default App;

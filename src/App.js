import React, {useState, useReducer} from 'react'
import {Container} from './AppStyle'
import Todo from './Todo'

function App() {

  const reducer=(state, action)=>{
    switch(action.type){
      case 'add': return [...state, {id: Date.now(), name:action.payload.name, completed: false}];
      case 'toggle': return state.map((todo)=>{
        if(todo.id === action.payload.id){
          return {...todo, completed:!todo.completed}
        }
        return todo
      })
      default: return state;
    }
  }
    
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit=()=>{
    setName("");
    dispatch({type:"add", payload:{name:name}});
  }
  return (
    <Container>
      <div>

      <input value={name} type="text" onChange={(e)=>setName(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      </div>
      {todos.map((value, index)=>{
        return(
          <div>
            <Todo value={value} dispatch={dispatch} />

          </div>
            ) 
      })}

    </Container>
  );
}

export default App;

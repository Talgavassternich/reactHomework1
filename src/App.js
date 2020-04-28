import React, {useState} from 'react';
import Todos from "./Todos";
import AddTodo from "./AddTodo";

const App  = () => {
    const [state, setState] = useState([
            {id: Math.random(), content:"Keep calm and stay home!"},
            {id: Math.random(), content:"Work"},
            {id: Math.random(), content:"Learn"},
            {id: Math.random(), content:"Evolve"}
        ]);
    const changeTodo = (newTodo, id) => {
      const newTodos = [...state].map(todo => {
          if (todo.id === id) {
              todo.content = newTodo;
          }
          return todo;
      });
      setState(newTodos);
    };
    const removeTodo = (id) => {
      const newTodos = state.filter((todo => {
          return todo.id !== id;
      }));
      setState(newTodos);
    };
    const addTodo = (content) => {
      const newTodos = [...state, {id: Math.random(), content}];
      setState(newTodos);
    };
    return (
      <div>
          <h1>Todo's</h1>
          <Todos todos={state} changeTodo={changeTodo} removeTodo={removeTodo}/>
          <hr />
          <AddTodo addTodo={addTodo} />
      </div>
    );
};

export default App;

import React, {Component} from 'react';
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component{
  state = {
    todos: [
        {id: Math.random(), content:"Keep calm and stay home!"},
        {id: Math.random(), content:"Keep calm and swfdy home!"},
        {id: Math.random(), content:"Keep cawdlm and stwd home!"},
        {id: Math.random(), content:"Keep cawdlm and stay home!"}
    ]
  };
  changeTodo = (newTodo, id) => {
      const newTodos = [...this.state.todos].map(todo => {
          if (todo.id === id) {
              todo.content = newTodo;
          }
          return todo;
      });
      this.setState({todos: newTodos});
  }
  removeTodo = (id) => {
      const newTodos = this.state.todos.filter((todo => {
          return todo.id !== id;
      }));
      this.setState({todos: newTodos}, () => {
          console.log(this.state.todos)});
  }
  addTodo = (contentObj) => {
      const newTodos = [...this.state.todos, {id: Math.random(), content: contentObj.content}];
      this.setState({todos: newTodos});
}
  render() {
    return (
        <div>
          <h1>Todo's</h1>
          <Todos todos={this.state.todos} changeTodo={this.changeTodo} removeTodo={this.removeTodo}/>
          <hr />
          <AddTodo addTodo={this.addTodo} />
        </div>
    );
  }
}

export default App;

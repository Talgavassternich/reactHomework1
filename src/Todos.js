import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({todos, changeTodo, removeTodo}) => {
    const todoList = todos.length ? (
        todos.map((todo) => {
            return <TodoItem onChange={changeTodo} onRemove={removeTodo} todo={todo} key={todo.id} />
        })
    ) : (
        <p>No todo's left</p>
    );
    return (
        <form className={"form"} onSubmit={(e) => {
            e.preventDefault();
        }}>{todoList}</form>
    );
}


export default Todos;
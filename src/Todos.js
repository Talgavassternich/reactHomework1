import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import {TodosContext} from "./TodosContext";

const Todos = () => {
    const context = useContext(TodosContext);
    const {state} = context;
    const todoList = state.length ? (
        state.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} context={context} />
        })
    ) : (
        <p>No todo's left</p>
    );
    const submitHandler = e => {e.preventDefault()};
    return (
        <form className={"form"} onSubmit={submitHandler}>{todoList}</form>
    );
}


export default Todos;
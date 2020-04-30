import React, {useContext, useImperativeHandle, useRef} from "react";
import TodoItem from "./TodoItem";
import {TodosContext} from "./TodosContext";

const Todos = React.forwardRef((props, ref) => {
    const {state, changeTodo, removeTodo} = useContext(TodosContext);

    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        showCreated: () => {
            inputRef.current.classList.toggle("createdTime");
        }
    }));
    const todoList = state.length ? (
        state.map((todo) => {
            return <TodoItem {...todo} key={todo.id} changeTodo={changeTodo} removeTodo={removeTodo}  />
        })
    ) : (
        <p>No todo's left</p>
    );
    const submitHandler = e => {e.preventDefault()};
    return (
        <form ref={inputRef} className={"form"} onSubmit={submitHandler}>{todoList}</form>
    );
});


export default Todos;
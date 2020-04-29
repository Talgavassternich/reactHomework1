import React, {useState, useContext} from "react";
import {TodosContext} from "./TodosContext";
import TodoItemInput from "./TodoItemInput";

const AddTodo = () => {
    const [state, setState] = useState("");
    const {addTodo} = useContext(TodosContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (state === "") {
            return;
        }
        addTodo(state);
        setState("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <TodoItemInput changeTodo={setState} content={state} minSize="30"/>
            <button>Add New Todo</button>
        </form>
    );
};

export default AddTodo;
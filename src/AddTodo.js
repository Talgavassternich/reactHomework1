import React, {useCallback} from "react";
import TodoItemInput from "./TodoItemInput";
import useAddTodo from  "./useAddTodo"

const AddTodo = ({todosList}) => {
    const [state, setState, handleSubmit] = useAddTodo("");
    const onClickHandler = useCallback((e) => {
        e.preventDefault();
        todosList.current.showCreated();
    }, [todosList]);
    return (
        <form onSubmit={handleSubmit}>
            <TodoItemInput changeTodo={setState} content={state} minSize="44.8"/>
            <button>Add New Todo</button>
            <button type="button" onClick={onClickHandler}>Show Created Time</button>
        </form>
    );
};

export default AddTodo;
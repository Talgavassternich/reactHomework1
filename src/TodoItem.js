import React from "react";
import TodoItemInput from "./TodoItemInput";

const TodoItem = React.memo(({ context: {changeTodo, removeTodo}, todo: { id,content } }) => {
    const removeHandler = () => {
        removeTodo(id);
    }
    return (
        <div className={"todo"}>
            <div className={"del"} onClick={removeHandler} />
            <TodoItemInput content={content} changeTodo={changeTodo} id={id}></TodoItemInput>
        </div>
    )
});

export default TodoItem;
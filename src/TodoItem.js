import React from "react";
import TodoItemInput from "./TodoItemInput";

const TodoItem = React.memo(({ changeTodo, removeTodo, id, content, created }) => {
    const removeHandler = () => {
        removeTodo(id);
    }
    return (
        <div className={"todo"}>
            <div className="del" onClick={removeHandler} />
            <TodoItemInput content={content} changeTodo={changeTodo} id={id} />
            <div className="createDate">Created: {created}</div>
        </div>
    )
});

export default TodoItem;
import React from "react";

const Todos = ({todos, changeTodo, removeTodo}) => {
    const changeHandler = (id, e) => {
        e.target.style.width = (e.target.value.length) + "ch";
        changeTodo(e.target.value, id);
    };
    const removeHandler = (id) => {
        removeTodo(id);
    };
    const keyPressHandler = (e) => {
        if (e.keyCode === 13) {
            e.target.blur();
        }
    };
    const todoList = todos.length ? (
        todos.map((todo) => {
            const size = todo.content.length <= 4 ? todo.content.length + 1 : todo.content.length;
            return (
                <div className={"todo"} key={todo.id}>
                    <div className={"del"} onClick={removeHandler.bind(this, todo.id)}></div>
                    <input type={"text"} value={todo.content} onChange={changeHandler.bind(this, todo.id)} onKeyUp={keyPressHandler} style={{width: size + "ch"}} />
                </div>);
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
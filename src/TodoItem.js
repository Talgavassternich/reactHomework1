import React from "react";

const TodoItem = ({ onChange, onRemove, todo, todo: { id,content } }) => {
    const changeHandler = (e) => {
        e.target.style.width = (e.target.value.length) + "ch";
        onChange(e.target.value, id);
    };
    const keyPressHandler = (e) => {
        if (e.keyCode === 13) {
            e.target.blur();
        }
    };
    const size = content.length <= 4 ? content.length + 1 : content.length;
    return (
        <div className={"todo"}>
            <div className={"del"} onClick={() => onRemove(id)} />
            <input type={"text"} value={content} onChange={changeHandler} onKeyUp={keyPressHandler} style={{width: size + "ch"}} />
        </div>
    )
};

export default TodoItem;
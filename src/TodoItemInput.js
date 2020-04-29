import React from "react";

const TodoItemInput = React.memo(({content, changeTodo, minSize, id}) => {
    const changeHandler = (e) => {
        changeTodo(e.target.value, id);
    };
    const keyPressHandler = (e) => {
        if (e.keyCode === 13) {
            e.target.blur();
        }
    };
    const size = !minSize ? content.length <= 4 ? (content.length + 1) : content.length : minSize;
    return <input type={"text"} value={content} onChange={changeHandler} onKeyUp={keyPressHandler} style={{width: size + "ch"}} />;
});

export default TodoItemInput;

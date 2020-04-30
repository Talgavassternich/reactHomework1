import React, {useMemo, useCallback} from "react";

const TodoItemInput = React.memo(({content, changeTodo, minSize, id}) => {
    const changeHandler = useCallback((e) => {
        changeTodo(e.target.value, id);
    }, [changeTodo, id]);
    const keyPressHandler = useCallback((e) => {
        if (e.keyCode === 13) {
            e.target.blur();
        }
    }, []);
    const size = useMemo(() => {
        if (minSize) {
            return minSize;
        }
        return  content.length <= 4 ? (content.length + 1) : content.length;
    }, [content, minSize]);
    return <input type={"text"} value={content} onChange={changeHandler} onKeyUp={keyPressHandler} style={{width: size + "ch"}} />;
});

export default TodoItemInput;

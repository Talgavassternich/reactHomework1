import React, {useEffect, createContext, useReducer, useCallback} from "react";

export const TodosContext = createContext([]);

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_TODO':
            return [...state].map(todo => {
                if (todo.id === action.id) {
                    todo.content = action.content;
                }
                return todo;
            });
        case 'REMOVE_TODO':
            return state.filter((todo => {
                return todo.id !== action.id;
            }));
        case 'ADD_TODO':
            return [...state, {id: Math.random(), content: action.content, created: (new Date()).toLocaleString()}];
        default:
            break;

    }
}

export const ContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, [
        {id: Math.random(), content:"Keep calm and stay home!", created: (new Date()).toLocaleString()},
        {id: Math.random(), content:"Learn", created: (new Date()).toLocaleString()},
        {id: Math.random(), content:"Work", created: (new Date()).toLocaleString()},
        {id: Math.random(), content:"Evolve", created: (new Date()).toLocaleString()}
    ],
init => !localStorage["todos"] ? init : JSON.parse(localStorage["todos"]));
    useEffect(() => {
        localStorage["todos"] = JSON.stringify(state);
    }, [state]);
    const changeTodo = useCallback((content, id) => {
        dispatch({type: "CHANGE_TODO", content, id});
    }, []);
    const removeTodo = useCallback((id) => {
        dispatch({type: "REMOVE_TODO", id});
    }, []);
    const addTodo = useCallback((content) => {
        dispatch({type: "ADD_TODO", content});
    }, []);
    const value = {state, changeTodo, removeTodo, addTodo};
    return (
        <TodosContext.Provider value={value}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default ContextProvider;
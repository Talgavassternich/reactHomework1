import React, {useState, useEffect, createContext} from "react";

export const TodosContext = createContext([]);

export const ContextProvider = props => {
    const [state, setState] = useState(() => {

        if (!localStorage["todos"]) {
            console.log("no data");
            return [
                {id: Math.random(), content:"Keep calm and stay home!"},
                {id: Math.random(), content:"Learn"},
                {id: Math.random(), content:"Work"},
                {id: Math.random(), content:"Evolve"}
            ];
        }
        console.log("data to parse");
        return JSON.parse(localStorage["todos"]);
    });
    useEffect(() => {
        localStorage["todos"] = JSON.stringify(state);
    }, [state]);
    const changeTodo = (newTodo, id) => {
        const newTodos = [...state].map(todo => {
            if (todo.id === id) {
                todo.content = newTodo;
            }
            return todo;
        });
        setState(newTodos);
    };
    const removeTodo = (id) => {
        const newTodos = state.filter((todo => {
            return todo.id !== id;
        }));
        setState(newTodos);
    };
    const addTodo = (content) => {
        const newTodos = [...state, {id: Math.random(), content}];
        setState(newTodos);
    };
    const value = {state, changeTodo, removeTodo, addTodo};
    return (
        <TodosContext.Provider value={value}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default ContextProvider;
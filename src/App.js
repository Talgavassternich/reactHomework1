import React from 'react';
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import ContextProvider from "./TodosContext";

const App  = () => {
    return (
        <>
            <h1>Todo's</h1>
            <ContextProvider>
                <Todos />
                <hr />
                <AddTodo />
            </ContextProvider>
        </>
    );
};

export default App;

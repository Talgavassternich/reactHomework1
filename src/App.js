import React, {useRef} from 'react';
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import ContextProvider from "./TodosContext";

const App  = () => {
    const ref = useRef();
    return (
        <>
            <h1>Todo's</h1>
            <ContextProvider>
                <Todos ref={ref} />
                <hr />
                <AddTodo todosList={ref} />
            </ContextProvider>
        </>
    );
};

export default App;

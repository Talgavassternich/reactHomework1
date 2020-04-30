import {useState, useContext} from "react";
import {TodosContext} from "./TodosContext";

const useAddTodo = (initial) => {
    const [state, setState] = useState(initial);
    const {addTodo} = useContext(TodosContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (state === "") {
            return;
        }
        addTodo(state);
        setState("");
    };
    return [state, setState, handleSubmit];
};

export default useAddTodo;
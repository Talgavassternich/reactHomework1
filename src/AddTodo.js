import React, {useState} from "react";

const AddTodo = ({addTodo}) => {
    const [state, setState] = useState("");
    const handleChange = (e) => {
        setState(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (state === "") {
            return;
        }
        addTodo(state);
        setState("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type={"text"} onChange={handleChange} value={state} />
            <button>Add New Todo</button>
        </form>
    );
}

export default AddTodo;
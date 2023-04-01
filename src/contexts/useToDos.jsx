import { useContext } from "react";

export const useToDos = () => {
    const context = useContext(todoContext)
    if (context) {
        return context;
    } else {
        alert("useTodos não está dentro do ToDoProvider") 
    }
}
import Form from './TodoInput';
import { useState, useEffect } from "react";
import ToDoLists from './ToDoList';
import * as data from '../constants/initialData.json';


const TodoList = () => {
    const [toDoList, setToDoList] = useState([]);
    useEffect(() => {
        setToDoList(data.default);
    }, []);

    return (
        <div>
            <Form toDoList={toDoList} setToDoList={setToDoList}></Form>
            <ToDoLists toDoList={toDoList} setToDoList={setToDoList}></ToDoLists>
        </div>
    );
}

export default TodoList
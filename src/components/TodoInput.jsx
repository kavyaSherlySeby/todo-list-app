import { useState } from "react";
import styles from './todoInput.module.css';

const Form = ({ toDoList, setToDoList }) => {
    const [toDo, setToDo] = useState({ name: "", done: false });
    const enableButton = toDo.name && toDo.name.length > 0 && toDo.name.trim() != '' ? false : true;
    const handleSubmit = (e) => {
        e.preventDefault();
        setToDoList([...toDoList, toDo]); // adds previous items, then adds new item just typed in input box
        setToDo({ name: "", done: false });
    }
    return (
        <form className={styles.toDoForm} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
                <input className={styles.formInput} type="text" value={toDo.name} onChange={(e) => setToDo({ name: e.target.value, done: false })}
                    placeholder="Enter to do item"></input>
                <button disabled={enableButton} className={styles.submit} type="submit">Add</button>
            </div>
        </form>
    );
}
export default Form;
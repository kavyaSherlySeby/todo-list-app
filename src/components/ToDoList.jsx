import TodoItem from './TodoItem';
import styles from './toDoList.module.css';
const ToDoLists = ({ toDoList, setToDoList }) => {
    return (
        <div className={styles.list}>
            {
                toDoList && toDoList.map((item, index) => (
                    <TodoItem item={item} key={index} id={index} toDoList={toDoList}
                        setToDoList={setToDoList}></TodoItem>
                ))
            }
        </div>
    );
}
export default ToDoLists;

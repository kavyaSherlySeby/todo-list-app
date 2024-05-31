import styles from './todoItem.module.css';
import useEffect from 'react';
const TodoItem = ({ item, id, toDoList, setToDoList }) => {
    // const textClass = item.done ? styles.completed : '';
    const handleClick = (id) => {
        let changedList = toDoList.map((toDoItem, index) => {
            if (index == id) toDoItem.done = true;
            return toDoItem;

        });
        setToDoList(changedList);
    }
    const handleDelete = (id) => {
        setToDoList(toDoList.filter((todo, index) => index != id));
    }

    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span className={item.done ? styles.completed : ''} onClick={() => handleClick(id)}>{item.name}</span>
                <span>
                    <button className={styles.deleteButton} onClick={() => handleDelete(id)}>x</button>
                </span>
            </div>
        </div>
    );
}
export default TodoItem;
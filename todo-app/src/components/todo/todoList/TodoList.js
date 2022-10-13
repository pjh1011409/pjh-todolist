import React from 'react';
import TodoItem from '../todoItem/TodoItem';
import styles from './TodoList.module.css';

function TodoList({ todos, onDel, onFix, onToggle }) {
  return (
    <ul className={styles.TodoList}>
      {todos.map((data, i) => (
        <TodoItem key={data.id} idx={i} todos={data} onDel={onDel} onFix={onFix} onToggle={onToggle} />
      ))}
    </ul>
  );
}

export default TodoList;

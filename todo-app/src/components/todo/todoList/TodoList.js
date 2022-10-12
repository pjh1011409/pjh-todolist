import React from 'react';
import TodoItem from '../todoItem/TodoItem';
import styles from './TodoList.module.css';

function TodoList({ todos, onDel, onToggle }) {
  return (
    <ul className={styles.TodoList}>
      {todos.map(data => (
        <TodoItem key={data.id} todos={data} onDel={onDel} onToggle={onToggle} />
      ))}
    </ul>
  );
}

export default TodoList;

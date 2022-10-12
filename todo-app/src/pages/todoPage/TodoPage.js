import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TodoPage.module.css';

import TodoInput from '../../components/todo/todoInput/TodoInput';
import TodoList from '../../components/todo/todoList/TodoList';

function ToDoPage() {
  const no = useRef(1);

  const [todos, setTodos] = useState([]);

  // text를 매개변수로 받는다. -> TodoList.js에서 text를 매개변수로 받아서 실행되는 함수
  // ... todos, : todos라는 데이터를 가져오고 값을 추가해주고, no.current++로 숫자를 1씩 증가시켜준다.
  // text : 의 text는 매개변수로 들어온 text / done의 기본값을 false(거짓)으로 지정

  const onAdd = text => {
    setTodos([
      ...todos,
      {
        id: (no.current += 1),
        text,
        done: false,
      },
    ]);
  };

  //   TodoItem.js에서 전달받은 id(매개변수)로 filter기능을 사용하여 id와 일치하지 않는 데이터만 data에 담게 해 줌
  // 쉽게 말하자면 지정된 id값의 data만 삭제하는 것
  const onDel = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Todoitem.js에서 id를 매개변수로 받아 id와 일치하는 데이터를 수정하는 함수
  const onToggle = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo,
      ),
    );
  };
  return (
    <div className={styles.toDos}>
      <h1>Todo List</h1>
      <TodoInput onAdd={onAdd} />
      <TodoList todos={todos} onDel={onDel} onToggle={onToggle} />
    </div>
  );
}

export default ToDoPage;

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TodoInput, TodoList } from '../../components/todo';
import styles from './TodoPage.module.css';
import * as Api from '../../api/api';
import { SignOut } from '../../components/auth';

function ToDoPage() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('access_token');
  const [todos, setTodos] = useState([{ id: 0, todo: '', isCompleted: false, userId: 0 }]);

  // todo 데이터 생성
  const createData = async text => {
    Api.postApi(text).then(res => {
      setTodos(prev => [...prev, res.data]);
    });
  };

  // todo 데이터 불러오기
  const readData = async () => {
    Api.getApi().then(res => {
      setTodos(res.data);
    });
  };

  // todo 데이터 수정
  const updateData = async (id, status, newTodo) => {
    const data = JSON.stringify({
      todo: newTodo,
      isCompleted: status,
    });

    await axios.put(`/api/todos/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });

    setTodos(
      todos.map(item => {
        return item.id === id ? { ...item, ...{ isCompleted: status }, ...{ todo: newTodo } } : item;
      }),
    );
  };

  // todo 데이터 삭제
  const deleteData = async id => {
    Api.delApi(id).then(
      setTodos(
        todos.filter(todo => {
          return todo.id !== id;
        }),
      ),
    );
  };

  // todo 데이터 완료유무 check
  const onToggle = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
          : todo,
      ),
    );
  };

  useEffect(() => {
    if (!accessToken) {
      navigate('/', { replace: true });
    }
    readData();
  }, [accessToken, navigate]);

  return (
    <div className={styles.toDos}>
      <div className={styles.header}>
        <SignOut />
        <h1>Todo List!</h1>
      </div>

      <TodoInput createData={createData} />
      <TodoList todos={todos} updateData={updateData} deleteData={deleteData} onToggle={onToggle} />
    </div>
  );
}

export default ToDoPage;

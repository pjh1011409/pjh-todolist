import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPenToSquare, faX } from '@fortawesome/free-solid-svg-icons';
import styles from './TodoEdit.module.css';

function TodoEdit({ todos, check, setCheck, updateData, onToggle }) {
  const { id, todo, isCompleted } = todos;

  const [status, setStatus] = useState(false); // 수정입력창 실행 유무

  const [prevTodo, setPrevTodo] = useState(todo); // 수정 이전 데이터
  const [newTodo, setNewTodo] = useState(todo); // 수정 이후 데이터
  const editInputRef = useRef(null);

  const textChange = () => {
    setStatus(true);
  };

  const changeDone = () => {
    if (!newTodo) return;
    setStatus(false);
    updateData(id, check, newTodo);
    setPrevTodo(newTodo);
  };
  const changeCancel = () => {
    setNewTodo(prevTodo);
    setStatus(false);
  };

  useEffect(() => {
    setCheck(isCompleted);
    if (status) {
      editInputRef.current.focus(); // edit 모드일때 포커싱을 한다.
    }
  }, [status, isCompleted]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {status ? (
        <>
          <input
            type="text"
            ref={editInputRef}
            value={newTodo || ''}
            maxLength="15"
            placeholder="할일을 수정주세요 (15자 이내)"
            onChange={e => setNewTodo(e.target.value)}
            className={styles.changeInput}
          />
          <button className={styles.changeDone} type="button" onClick={() => changeDone()}>
            <FontAwesomeIcon icon={faPen} className={styles.pen} />
          </button>
          <button className={styles.changeCancel} type="button" onClick={() => changeCancel()}>
            <FontAwesomeIcon icon={faX} className={styles.x} />
          </button>
        </>
      ) : (
        <>
          {isCompleted === true ? (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <em
              className={styles.checked}
              onClick={() => {
                onToggle(id);
              }}
              role="button"
              tabIndex={0}
            >
              {newTodo}
            </em>
          ) : (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <em
              className={styles.unChecked}
              onClick={() => {
                onToggle(id);
              }}
              role="button"
              tabIndex={0}
            >
              {newTodo}
            </em>
          )}

          <button type="button" onClick={() => textChange()}>
            <FontAwesomeIcon icon={faPenToSquare} className={styles.pen} />
          </button>
        </>
      )}
    </>
  );
}

export default TodoEdit;

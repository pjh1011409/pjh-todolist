/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { faSquareCheck, faSquare } from '@fortawesome/free-regular-svg-icons';

import TodoEdit from '../todoEdit/TodoEdit';
import styles from './TodoItem.module.css';

function TodoItem({ idx, todos, updateData, deleteData, onToggle }) {
  const { id, todo, isCompleted } = todos;
  // checkBox 체크 유무
  const [check, setCheck] = useState(false);

  const checkBox = () => {
    setCheck(!check);
    updateData(id, !check, todo);
  };
  return (
    <div>
      <li>
        <span
          onClick={() => {
            onToggle(id);
            checkBox();
          }}
          role="button"
          tabIndex={0}
        >
          {isCompleted ? (
            <FontAwesomeIcon className={styles.checkBox} icon={faSquareCheck} size="2x" />
          ) : (
            <FontAwesomeIcon className={styles.checkBox} icon={faSquare} size="2x" />
          )}
        </span>

        <TodoEdit
          idx={idx}
          todos={todos}
          check={check}
          setCheck={setCheck}
          updateData={updateData}
          onToggle={onToggle}
        />
        <button onClick={() => deleteData(id)} type="button">
          <FontAwesomeIcon icon={faTrash} className={styles.trash} />
        </button>
      </li>
    </div>
  );
}

export default TodoItem;

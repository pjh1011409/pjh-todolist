/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { faSquareCheck, faSquare } from '@fortawesome/free-regular-svg-icons';

import TodoEdit from '../todEdit/TodoEdit';
import styles from './TodoItem.module.css';

function TodoItem({ idx, todos, onDel, onFix, onToggle }) {
  const { id, text, done } = todos;

  return (
    <div>
      <li>
        <span onClick={() => onToggle(id)} role="button" tabIndex={0}>
          {done ? (
            <FontAwesomeIcon className={styles.checkBox} icon={faSquareCheck} size="2x" />
          ) : (
            <FontAwesomeIcon className={styles.checkBox} icon={faSquare} size="2x" />
          )}
        </span>

        <TodoEdit idx={idx} todos={todos} onFix={onFix} onToggle={onToggle} />
        <button onClick={() => onDel(id)} type="button">
          <FontAwesomeIcon icon={faTrash} className={styles.trash} />
        </button>
      </li>
    </div>
  );
}

export default TodoItem;

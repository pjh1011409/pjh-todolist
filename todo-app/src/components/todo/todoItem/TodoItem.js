/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { faSquareCheck, faSquare } from '@fortawesome/free-regular-svg-icons';

import styles from './TodoItem.module.css';

function TodoItem({ todos, onDel, onToggle }) {
  const { id, text, done } = todos;

  return (
    <div>
      <li className={`${done} ? ${styles.Checked}} : ${styles.unChecked}`}>
        <span onClick={() => onToggle(id)} role="button" tabIndex={0}>
          {done ? <FontAwesomeIcon icon={faSquareCheck} size="2x" /> : <FontAwesomeIcon icon={faSquare} size="2x" />}
        </span>
        <em onClick={() => onToggle(id)} role="button" tabIndex={0}>
          {text}
        </em>
        <button onClick={() => onDel(id)} type="button">
          <FontAwesomeIcon icon={faTrash} size="2x" />
        </button>
      </li>
    </div>
  );
}

export default TodoItem;

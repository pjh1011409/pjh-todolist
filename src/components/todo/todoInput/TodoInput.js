import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import styles from './TodoInput.module.css';

function TodoInput({ createData }) {
  const textRef = useRef();
  const [text, setText] = useState('');

  const changeInput = e => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (!text) return;
      createData(text);
      setText('');
    },
    [text],
  );

  useEffect(() => {
    textRef.current.focus();
  }, []);

  return (
    <form className={styles.toDoInput} onSubmit={onSubmit}>
      <input
        maxLength="15"
        type="text"
        value={text}
        placeholder="할일을 입력해주세요 (15자 이내)"
        onChange={changeInput}
        ref={textRef}
      />
      <button type="submit">
        <FontAwesomeIcon icon={faCirclePlus} size="3x" className={styles.plusIcon} />
      </button>
    </form>
  );
}

export default TodoInput;

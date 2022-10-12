import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import styles from './TodoInput.module.css';

function TodoInput({ onAdd }) {
  const textRef = useRef();
  const [text, setText] = useState('');

  //   매개변수에 e를 넣어 이벤트가 발생될 때 실행되는 함수이다.
  // 사용자가 입력한 값을 setText에 넣어준다. 사용자가 입력한 값은 text
  const changeInput = e => {
    const { value } = e.target;
    setText(value);
  };

  //   evt.preventDefault()는 새로고침을 방지 -> 사용자가 입력창에서 엔터 or button 클릭 시 새로고침 방지
  // if(! text) return는 공백 입력 방지
  // onAdd함수에 매개변수로 사용자가 입력한 text를 담고, setText('')를 사용하여 입력창을 공백으로 만든 후에
  // useRef를 사용하여 포커스를 두게 하였다. textRef는 useRef의 이름이다. 이름=사용자 정의
  const onSubmit = e => {
    // 새로고침 방지
    e.preventDefault();
    // text에 아무것도 없을 때 - 공백 입력 방지
    if (!text) return;

    onAdd(text);

    setText('');
    textRef.current.focus();
  };
  return (
    <form className={styles.toDoInput} onSubmit={onSubmit}>
      <input type="text" value={text} onChange={changeInput} ref={textRef} />
      <button type="submit">
        <FontAwesomeIcon icon={faCirclePlus} size="2x" className={styles.plusIcon} />
      </button>
    </form>
  );
}

export default TodoInput;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';
import * as Api from '../../../api/api';

function SignUp() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputValue;

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  // 모든 input의 value는 1자 이상.
  const isValidInput = email.length && password.length >= 1;

  // 이메일 검사: '@'을 포함할 것.
  const isValidEmail = email.includes('@');

  // 비밀번호 검사: 8자 이상일 것.
  const isValidPassword = password.length >= 8;

  // 검사한 모든 로직의 유효성 검사가 true가 될때 getIsActive함수가 작동한다. (버튼 작동 활성화 유무)
  const getIsActive = isValidEmail && isValidPassword && isValidInput;

  // 유효성 검사 중 하나라도 만족하지못할때, 경고창 발생.
  const handleButtomValid = () => {
    if (!isValidInput) {
      // eslint-disable-next-line no-alert
      alert('아이디 또는 비밀번호를 입력해주세요');
    } else if (!isValidEmail) {
      alert('아이디가 올바른 이메일 형식이 아닙니다.(@를 포함해주세요)');
    } else if (!isValidPassword) {
      alert('비밀번호를 8자 이상 입력해주세요');
    }
  };

  const data = { email, password };
  console.log(data);

  // const signUpSubmit = () => {
  //   Api.post('/auth/signup', data)
  //     .then(response => response.json())
  //     .then(response => {
  //       alert('가입되셨습니다.');
  //       console.log(response);
  //     });
  // };
  const signUpSubmit = () => {
    fetch('https://pre-onboarding-selection-task.shop/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        alert('가입되셨습니다.');
        console.log(result);
      });
  };
  // 만약 로컬스토리지에 token이 존재한다면 ??
  useEffect(() => {
    console.log(process.env.REACT_APP_SERVER_URL);
    if (localStorage.getItem('token')) {
      navigate('/todo');
    }
  }, [navigate]);

  return (
    <div className={styles.signUp}>
      <div className={styles.signUpInner}>
        <h2>Sign Up</h2>
        <form onSubmit={signUpSubmit}>
          <input
            className={styles.email}
            type="text"
            name="email"
            onChange={handleInput}
            placeholder="Enter Username"
          />
          <input
            className={styles.password}
            type="password"
            name="password"
            onChange={handleInput}
            placeholder="Enter Password"
          />
          <button
            className={`${styles.signUpBtn} ${getIsActive ? 'signUpButtonAction' : 'signUpButtonInaction'}`}
            type="submit"
            value="Sign In"
            onClick={handleButtomValid}
          >
            ⭐️ Create User Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LogIn.module.css';

function LogIn() {
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

  // 모든 input의 value가 1자 이상이 되어야 한다
  const isValidInput = email.length && password.length >= 1;

  // 이메일 검사: '@', '.' 이 둘다 포함될것.
  const isValidEmail = email.includes('@');

  const isValidPassword = password.length >= 8;
  // 검사한 모든 로직의 유효성 검사가 true가 될때 getIsActive함수가 작동한다. 버튼 클릭 이벤트가 발생할때 넣어줄 함수.
  const getIsActive = isValidEmail && isValidPassword && isValidInput;

  // 유효성 검사 중 하나라도 만족하지못할때 즉, 버튼이 비활성화 될 때 버튼을 클릭하면 아래와 같은 경고창이 뜬다.
  const handleButtomValid = () => {
    if (!isValidInput) {
      // eslint-disable-next-line no-alert
      alert('아이디 또는 비밀번호를 입력해주세요');
    } else if (!isValidEmail) {
      alert('아아디가 올바른 이메일 형식이 아닙니다.(@를 포함해주세요)');
    } else if (!isValidPassword) {
      alert('비밀번호를 8자 이상 입력해주세요');
    }
  };
  const data = { email, password };

  const LogInSubmit = () => {
    fetch('https://pre-onboarding-selection-task.shop/auth/signin', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        alert('로그인성공');
        localStorage.setItem('token', result.token);
        navigate('/todo');
      });
  };
  // 만약 로컬스토리지에 token이 존재한다면 ??
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/todo');
    }
  }, [navigate]);
  return (
    <div className={styles.signIn}>
      <div className={styles.signInInner}>
        <h2>Login In</h2>
        <form onSubmit={LogInSubmit}>
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
            className={`${styles.signInBtn} ${getIsActive ? 'signUpButtonAction' : 'signUpButtonInaction'}`}
            type="submit"
            value="Sign In"
            onClick={handleButtomValid}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './SignUp.module.css';

function SignUp() {
  const navigate = useNavigate();
  const baseURL = 'https://pre-onboarding-selection-task.shop';

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

  // 유효성검사
  const isValidEmail = email.includes('@') && email.length >= 4;
  const isValidPassword = password.length >= 8;
  const getIsActive = isValidEmail && isValidPassword;

  // 정보제출(새로고침방지)
  const onSubmit = e => {
    e.preventDefault();
  };

  // 회원가입 API
  const signUpSubmit = async () => {
    const data = { email, password };

    try {
      const response = await axios.post(`${baseURL}/auth/signup`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        localStorage.setItem('access_token', response.data.access_token);
        alert('회원가입이 완료되었습니다.');
        navigate('/todo', { replace: true });
      }
    } catch (error) {
      console.error(error);
      alert('이미 존재하는 계정입니다.');
    }
  };

  // 로컬스토리지에 token이 존재시 /todo로 이동
  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      navigate('/todo', { replace: true });
    }
  }, [navigate]);

  return (
    <div className={styles.signUp}>
      <div className={styles.signUpInner}>
        <h2>Sign Up</h2>
        <form onSubmit={onSubmit}>
          {!isValidEmail && <div className={styles.warning}>ID는 3자 이상, @를 포함</div>}

          <input
            className={styles.email}
            type="text"
            name="email"
            onChange={handleInput}
            placeholder="Enter Username"
          />
          {!isValidPassword && <div className={styles.warning}>Password는 8자 이상</div>}

          <input
            className={styles.password}
            type="password"
            name="password"
            onChange={handleInput}
            placeholder="Enter Password"
          />
          <button
            className={styles.signUpBtn}
            type="button"
            value="Sign In"
            onClick={signUpSubmit}
            disabled={!getIsActive}
          >
            ⭐️ Create User Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

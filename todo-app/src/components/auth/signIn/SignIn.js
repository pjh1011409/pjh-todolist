import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import styles from './SignIn.module.css';

function SignIn() {
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

  // 유효성검사
  const isValidEmail = email.includes('@') && email.length >= 4;
  const isValidPassword = password.length >= 8;
  const getIsActive = isValidEmail && isValidPassword;

  // 정보제출(새로고침방지)
  const onSubmit = e => {
    e.preventDefault();
  };

  // 로그인 API
  async function signInSubmit() {
    const data = {
      email,
      password,
    };
    try {
      const response = await axios.post('/api/auth/signin', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.access_token) {
        localStorage.setItem('access_token', response.data.access_token);
      }
      if (response.status === 200) {
        navigate('/todo', { replace: true });
      }
    } catch (error) {
      console.error(error);
      alert('존재하지 않는 계정입니다. 회원가입을 진행해주세요.');
    }
  }

  // async function signInSubmit() {
  //   Api.signInApi(email, password);
  // }

  // 로컬스토리지에 token이 존재시 /todo로 이동
  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      navigate('/todo', { replace: true });
    }
  }, [navigate]);

  return (
    <div className={styles.signIn}>
      <div className={styles.signInInner}>
        <h2>Login In</h2>
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
            className={styles.signInBtn}
            type="submit"
            value="Sign In"
            onClick={signInSubmit}
            disabled={!getIsActive}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

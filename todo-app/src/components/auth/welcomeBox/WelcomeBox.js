import React, { useState } from 'react';
import styles from './WelcomeBox.module.css';

function WelcomeBox({ signHandler, sign }) {
  return (
    <div className={styles.signUp}>
      <div className={styles.signUpInner}>
        <h1>
          Welcome !{' '}
          <img
            className={styles.welcomeIcon}
            src={`${process.env.PUBLIC_URL}./images/welcome-icon.png`}
            alt="환영합니다(이미지없음)"
          />
        </h1>

        {!sign ? <h4>👇 Go To SignUp </h4> : <h4>👇 Go To logIn</h4>}

        <button type="button" onClick={signHandler} className={styles.signUpBtn}>
          {sign === true ? '로그인' : '회원가입'}
        </button>
      </div>
    </div>
  );
}

export default WelcomeBox;

import React, { useState } from 'react';
import styles from './WelcomeBox.module.css';

function WelcomeBox({ signHandler, sign }) {
  return (
    <div className={styles.signUp}>
      <div className={styles.signUpInner}>
        <h1>Welcome !</h1>

        {!sign ? <h4>👇 Go To SignUp </h4> : <h4>👇 Go To logIn</h4>}

        <button type="button" onClick={signHandler} className={styles.signUpBtn}>
          {sign === true ? '로그인' : '회원가입'}
        </button>
      </div>
    </div>
  );
}

export default WelcomeBox;

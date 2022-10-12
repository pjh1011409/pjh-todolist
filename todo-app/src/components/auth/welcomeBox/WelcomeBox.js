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
        <p>Register to use this site &#39;s ToDo List</p>
        {!sign && <h4>👇 Please sign up to log in</h4>}

        <button type="button" onClick={signHandler} className={styles.signUpBtn}>
          {sign === true ? 'login' : 'SignUp'}
        </button>
      </div>
    </div>
  );
}

export default WelcomeBox;

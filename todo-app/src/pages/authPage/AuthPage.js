import React, { useState } from 'react';
import styles from './AuthPage.module.css';

import WelcomeBox from '../../components/auth/welcomeBox/WelcomeBox';
import SignUp from '../../components/auth/signUp/SignUp';
import LogIn from '../../components/auth/login/LogIn';

function AuthPage() {
  const [sign, setSign] = useState(false);

  const signHandler = () => {
    setSign(!sign);
  };

  return (
    <div className={styles.fullLayout}>
      <div className={styles.authBoxBg}>
        <div className={styles.authCard}>
          <WelcomeBox signHandler={signHandler} sign={sign} />
          {sign === false ? <LogIn /> : <SignUp />}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;

import React, { useState } from 'react';
import { WelcomeBox, SignUp, SignIn } from 'components/auth';
import styles from './AuthPage.module.css';

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
          {sign === false ? <SignIn /> : <SignUp />}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignOut.module.css';

function SignOut() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear('access_token');
    navigate('../', { replace: true });
  };
  return (
    <button className={styles.logoutBtn} type="button" onClick={logout}>
      Logout
    </button>
  );
}

export default SignOut;

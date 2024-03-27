// pages/signin.tsx
import { useState } from 'react';
import Head from 'next/head';
import { validateUser, signIn } from '../lib/signin';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleValidateUser = () => {
    validateUser(email)
      .then(response => {
        if (response.status === 200) {
          setPasswordVisible(true);
          setSignInButtonVisible(true);
          setErrorMessage('');
          setNextButtonVisible(false);
        } else if (response.status === 401) {
          setErrorMessage('Invalid email. Please try again.');
          setPasswordVisible(false);
          setSignInButtonVisible(false);
          setNextButtonVisible(true);
        } else {
          setErrorMessage('An error occurred. Please try again later.');
          setPasswordVisible(false);
          setSignInButtonVisible(false);
          setNextButtonVisible(true);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Head>
        <title>Astrotalk Sign in</title>
        <link href="https://cdn.jsdelivr.net/npm/gotham-fonts@1.0.3/css/gotham-rounded.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>
      <div className="container">
        <div className="logo"></div>
        <p className="signin-text">Sign in</p>
        <p className="email-text">
          <span>Email</span>
          <span className="info-icon"><img src="https://www.svgrepo.com/show/447016/information.svg" alt="i" /></span>
        </p>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="cta" id="nextcta" onClick={handleValidateUser}>Next</button>
        <div className="error-message" style={{ display: errorMessage ? 'block' : 'none' }}>{errorMessage}</div>
        <button className="cta" style={{ display: 'none' }} id="signInButton" onClick={signIn}>Sign in</button>
        <div className="trouble-text">Having trouble signing in?</div>
        <div className="divider">or</div>
        <button className="create-account-cta">Create Account</button>
      </div>
      <div className="footer">
        Astrotalk copyright © 2023 | 
        <a href="#">Privacy & Legal</a> | 
        <a href="#">Contact</a>
      </div>
    </>
  );
};

export default Signin;

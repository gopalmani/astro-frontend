// pages/signup.tsx
import { useState } from 'react';
import Head from 'next/head';
import { signupUser, verifyOtp } from '../lib/signup';

const Signup = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showOtpContainer, setShowOtpContainer] = useState(false);

  const handleSignup = () => {
    signupUser(name, dob, email, password, mobile, username)
      .then(response => {
        if (response.status === 200) {
          setErrorMessage('');
          setSuccessMessage('Signup successful! Please check your email for an OTP.');
          setShowOtpContainer(true);
        } else if (response.status === 409) {
          response.text().then(data => {
            setErrorMessage(data);
          });
        } else {
          setErrorMessage('An error occurred. Please try again later.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleVerifyOtp = () => {
    verifyOtp(email, otp)
      .then(response => {
        if (response.status === 200) {
          setSuccessMessage('OTP Verified, please login using your email.');
          // You can redirect the user to the login page or perform other actions here
        } else {
          setErrorMessage('Invalid OTP. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Head>
        <title>Astrotalk Sign up</title>
        <link href="https://cdn.jsdelivr.net/npm/gotham-fonts@1.0.3/css/gotham-rounded.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>
      <div className="container">
        <div className="logo"></div>
        <p className="signin-text">Create An Account</p>
        <p className="email-text">
          <span>Name</span>
        </p>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <p className="email-text">
          <span>Date of Birth</span>
        </p>
        <input type="date" value={dob} onChange={e => setDob(e.target.value)} />
        {/* Continue with other input fields */}
        <button className="cta" onClick={handleSignup}>Submit</button>
        <div className="success-message" style={{ display: successMessage ? 'block' : 'none' }}>{successMessage}</div>
        <div className="error-message" style={{ display: errorMessage ? 'block' : 'none' }}>{errorMessage}</div>
        {/* OTP input and Verify OTP button */}
        {showOtpContainer && (
          <div className="otp-container">
            <p className="email-text">
              <span>Enter OTP</span>
            </p>
            <input type="text" value={otp} onChange={e => setOtp(e.target.value)} />
            <button className="cta" onClick={handleVerifyOtp}>Verify OTP</button>
            <div className="success-message" style={{ display: successMessage ? 'block' : 'none' }}>
              OTP Verified, please <a href="../signin/signin.html">login</a> using your E-mail.
            </div>
          </div>
        )}
        <div className="footer">
          Astrotalk copyright © 2023 | 
          <a href="#">Privacy & Legal</a> | 
          <a href="#">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Signup;

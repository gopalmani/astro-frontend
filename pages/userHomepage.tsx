// pages/userHomepage.tsx
import Head from 'next/head';

const UserHomepage = () => {
  return (
    <>
      <Head>
        <title>Astromatch</title>
        <link href="https://cdn.jsdelivr.net/npm/gotham-fonts@1.0.3/css/gotham-rounded.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>
      <header className="site-header">
        <div className="header-container">
          <div className="logo"></div>
          <nav className="main-nav">
            <ul>
              <li><a href="#">Matches</a></li>
              <li><a href="#">Messages</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </nav>
          <div className="header-icons">
            <a href="../signin/signin.html"><img src="../asset/img/user-profile.svg" alt="Signin" /></a>
            <a href="../pages/faq.html"><img src="../asset/img/question2.svg" alt="FAQ" /></a>
          </div>
        </div>
      </header>
      <main className="site-main">
        <div className="background-image"></div>
        <div className="content">
          <p className="homepage-text"></p>
        </div>
      </main>
      <footer className="site-footer">
        <p className="footer-text">Astrotalk copyright © 2023 | 
          <a href="../frontend/pages/tandc.html">Terms & Conditions</a> | 
          <a href="#">Contact</a>
        </p>
      </footer>
    </>
  );
};

export default UserHomepage;

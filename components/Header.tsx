// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo"></div>
        <nav>
          <ul>
            <li><Link href="/"><a>Products</a></Link></li>
            <li><Link href="/"><a>Learn</a></Link></li>
            <li><Link href="/"><a>Safety</a></Link></li>
            <li><Link href="/"><a>Support</a></Link></li>
          </ul>
        </nav>
        <div className="header-icons">
          <Link href="/signin"><a><img src="/asset/img/user-profile.svg" alt="Signin" /></a></Link>
          <Link href="/faq"><a><img src="/asset/img/question2.svg" alt="FAQ" /></a></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

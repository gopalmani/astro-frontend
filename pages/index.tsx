// pages/index.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <video autoPlay loop muted id="background-video">
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <p className="homepage-text"></p>
          {/* <a href="/signup" className="cta homepage-cta" id="find-matches-button">Create An Account</a> */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;

import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="site-container">
      <main>
        <section className="hero-section">
          <video className="hero-background-video" autoPlay muted loop playsInline>
            <source src="backdrop.mp4" type="video/mp4" />
          </video>
          <div className="hero-content">
            <h1>Welcome to Anything F1</h1>
            <p>Your ultimate destination for everything Formula 1. Stay updated with the latest news, stats, and join our passionate community of F1 fans.</p>
            <div className="hero-buttons">
              <a href='/register'>
                <button className="hero-button hero-button-primary">Join Community</button>
              </a>
              <a href='driverstandings'>
                <button className="hero-button hero-button-secondary">View Standings</button>
              </a>
            </div>
          </div>
        </section>
        
        <div className="home-container">
          <section className="feature-section">
            <h2 className="section-title">Explore Features</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-content">
                  <h3>Driver Statistics</h3>
                  <p>Comprehensive stats for all Formula 1 drivers. Compare performances, view historical data, and more.</p>
                  <a href="/driverstats" className="feature-link">View Drivers &rarr;</a>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-content">
                  <h3>Team Statistics</h3>
                  <p>Detailed information about all F1 teams, their performances, and historical achievements.</p>
                  <a href="/teamstats" className="feature-link">View Teams &rarr;</a>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-content">
                  <h3>Community Forum</h3>
                  <p>Join discussions with other F1 enthusiasts. Share your thoughts and stay connected.</p>
                  <a href="/forum" className="feature-link">Join Forum &rarr;</a>
                </div>
              </div>
            </div>
          </section>

          <section className="latest-news">
            <h2 className="section-title">Latest F1 News</h2>
            <div className="news-grid">
              <div className="news-card">
                <div className="news-content">
                  <p className="news-date">April 3, 2025</p>
                  <h3 className="news-title">Hamilton secures pole position at Monaco Grand Prix</h3>
                  <a href="/news/1" className="news-link">Read More</a>
                </div>
              </div>
              
              <div className="news-card">
                <div className="news-content">
                  <p className="news-date">April 2, 2025</p>
                  <h3 className="news-title">Ferrari unveils upgrades ahead of Monaco weekend</h3>
                  <a href="/news/2" className="news-link">Read More</a>
                </div>
              </div>
              
              <div className="news-card">
                <div className="news-content">
                  <p className="news-date">April 1, 2025</p>
                  <h3 className="news-title">Verstappen looking to extend championship lead</h3>
                  <a href="/news/3" className="news-link">Read More</a>
                </div>
              </div>
            </div>
          </section>
          
          <section className="cta-section">
            <h2>Ready to Test Your F1 Knowledge?</h2>
            <p>Challenge yourself with our F1 quiz and show off your expertise. From historical facts to current season details, we've got questions for fans of all levels.</p>
            <button className="cta-button">Take the Quiz</button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
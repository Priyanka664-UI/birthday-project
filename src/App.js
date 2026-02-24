import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const openGift = (e) => {
    e.currentTarget.classList.add('opened');
  };

  return (
    <div className="App">
      <div className="progress-bar" style={{ width: `${(currentPage / totalPages) * 100}%` }}></div>

      {currentPage === 1 && (
        <div className="page active">
          <div className="container">
            <div className="birthday-card">
              <div className="balloons">
                {[1, 2, 3, 4].map(i => <div key={i} className="balloon"></div>)}
              </div>
              
              <h1>Happy Birthday</h1>
              <div className="hero-text">GIRISH</div>
              
              <div className="cake">
                <div className="cake-layer">
                  <div className="candle">
                    <div className="flame"></div>
                  </div>
                </div>
              </div>

              <div className="gifts-container">
                <div className="bouquet">
                  {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="flower"></div>)}
                  <div className="stem"></div>
                </div>
                <div className="chocolate-box"></div>
                <div className="bouquet">
                  {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="flower"></div>)}
                  <div className="stem"></div>
                </div>
              </div>
            </div>

            <div className="nav-buttons">
              <button onClick={() => setCurrentPage(2)}>Continue</button>
            </div>
          </div>
        </div>
      )}

      {currentPage === 2 && (
        <div className="page active">
          <div className="container">
            <h1>For You, Girish</h1>
            
            <div className="photo-container">
              <img src="photo4.jpeg" alt="Us" />
            </div>

            <div className="message-box">
              <p>You are the most amazing person in my life. Your presence brings light to my darkest days, and your love gives me strength I never knew I had. Every moment with you is a treasure, every conversation a gift. You make me want to be better, to dream bigger, and to love deeper.</p>
            </div>

            <div className="message-box">
              <p>As you step into this new year of your life, I promise to stand by your side through every challenge and celebrate every victory with you. Together, we'll create memories that last a lifetime.</p>
            </div>

            <div className="nav-buttons">
              <button onClick={() => setCurrentPage(1)}>Back</button>
              <button onClick={() => setCurrentPage(3)}>Next</button>
            </div>
          </div>
        </div>
      )}

      {currentPage === 3 && (
        <div className="page active">
          <div className="container">
            <h1>Our Journey Together</h1>
            <div className="divider"></div>

            <div className="gallery">
              {[
                { img: 'photo1.jpeg', caption: 'Our Beginning' },
                { img: 'photo2.jpeg', caption: 'Together Always' },
                { img: 'photo3.jpeg', caption: 'Beautiful Moments' },
                { img: 'photo5.jpeg', caption: 'Forever Yours' }
              ].map((item, i) => (
                <div key={i} className="gift-box" onClick={openGift}>
                  <div className="gift-bow"></div>
                  <div className="gift-image">
                    <img src={item.img} alt={`Memory ${i + 1}`} />
                    <div className="gift-caption">{item.caption}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="nav-buttons">
              <button onClick={() => setCurrentPage(2)}>Back</button>
              <button onClick={() => setCurrentPage(4)}>Next</button>
            </div>
          </div>
        </div>
      )}

      {currentPage === 4 && (
        <div className="page active">
          <div className="container">
            <h1>My Promise to You</h1>
            <div className="divider"></div>

            <div className="message-box">
              <p>As you celebrate another year, I want you to know that you are my greatest blessing. Every day with you feels like a gift I never want to return. You've taught me what it means to love deeply, laugh freely, and dream fearlessly.</p>
            </div>

            <div className="message-box">
              <p>I promise to stand by your side through every challenge, celebrate every victory, and cherish every moment we share. Together, we'll build a future filled with endless love, adventure, and happiness.</p>
            </div>

            <div className="message-box">
              <p>You are the best decision my heart ever made. With you, my life is complete. You're not just my boyfriend—you're my best friend, my partner, and my forever.</p>
            </div>

            <div className="divider"></div>
            
            <h2 style={{ marginTop: '40px', color: '#667eea' }}>Here's to another year of us, another year of love, another year of building our dreams together.</h2>

            <div className="nav-buttons" style={{ marginTop: '50px' }}>
              <button onClick={() => setCurrentPage(3)}>Back</button>
              <button onClick={() => setCurrentPage(1)}>Start Over</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

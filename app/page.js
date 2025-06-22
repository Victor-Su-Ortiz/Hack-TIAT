import MatrixRain from './components/MatrixRain';
import CursorTrail from './components/CursorTrail';
import GlitchText from './components/GlitchText';

export default function Home() {
  return (
    <>
      <MatrixRain />
      <CursorTrail />
      
      {/* Floating icons */}
      <div className="floating-icon" style={{ top: '10%', left: '10%' }}>⚡</div>
      <div className="floating-icon" style={{ top: '30%', right: '15%' }}>🎨</div>
      <div className="floating-icon" style={{ bottom: '20%', left: '20%' }}>💻</div>
      <div className="floating-icon" style={{ bottom: '40%', right: '10%' }}>✨</div>
      
      <header>
        <div className="logo-container">
          <GlitchText tag="h1">HACK: TIAT</GlitchText>
          <p className="tagline">The Intersection of Art and Technology</p>
        </div>
      </header>
      
      <nav>
        <a href="#about">About</a>
        <a href="#schedule">Schedule</a>
        <a href="#location">Location</a>
        <a href="#sponsors">Sponsors</a>
        <a href="#register">Register</a>
      </nav>
      
      <div className="event-info">
        <section id="about" className="info-section ascii-border">
          <GlitchText tag="h2">// About the Hackathon</GlitchText>
          <p>Join us for a 3-day creative technology hackathon where artists, engineers, and creative coders collaborate to build poetic, experimental web-based projects. Explore the boundaries where code becomes art and art becomes interactive.</p>
          <br />
          <p><strong>Theme:</strong> <span style={{ color: '#ff00ff' }}>Poetic Web</span></p>
          <p><strong>Dates:</strong> <span style={{ color: '#00ffff' }}>August 15-17</span></p>
          <p><strong>Location:</strong> <span style={{ color: '#00ffff' }}>Frontier Tower</span></p>
        </section>
        
        <section id="schedule" className="info-section ascii-border">
          <GlitchText tag="h2">// Event Schedule</GlitchText>
          
          <h3>Friday - Kickoff</h3>
          <div className="schedule-item">
            <span>Registration</span>
            <span className="time">6:00 PM</span>
          </div>
          <div className="schedule-item">
            <span>Welcome + Kickoff</span>
            <span className="time">7:00 PM</span>
          </div>
          <div className="schedule-item">
            <span>Group Idea Share</span>
            <span className="time">8:00 PM</span>
          </div>
          <div className="schedule-item">
            <span>Happy Hour</span>
            <span className="time">9:00 PM</span>
          </div>
          
          <h3>Saturday - Hack Day</h3>
          <div className="schedule-item">
            <span>Hacking Begins</span>
            <span className="time">9:00 AM</span>
          </div>
          <div className="schedule-item">
            <span>Lunch</span>
            <span className="time">12:00 PM</span>
          </div>
          <div className="schedule-item">
            <span>Workshops</span>
            <span className="time">1:00 PM</span>
          </div>
          <div className="schedule-item">
            <span>Snack Break</span>
            <span className="time">2:30 PM</span>
          </div>
          <div className="schedule-item">
            <span>Hacking Time</span>
            <span className="time">3:00-6:00 PM</span>
          </div>
          <div className="schedule-item">
            <span>Dinner</span>
            <span className="time">6:00 PM</span>
          </div>
          <div className="schedule-item">
            <span>Late-night Hacking</span>
            <span className="time">7:00 PM</span>
          </div>
          
          <h3>Sunday - Exhibition</h3>
          <div className="schedule-item">
            <span>Exhibition Setup</span>
            <span className="time">9:00 AM</span>
          </div>
          <div className="schedule-item">
            <span>Public Opening</span>
            <span className="time">4:00 PM</span>
          </div>
          <div className="schedule-item">
            <span>Closing Ceremony</span>
            <span className="time">6:00 PM</span>
          </div>
        </section>
        
        <section id="sponsors" className="sponsors ascii-border">
          <GlitchText tag="h2">// Sponsors & Partners</GlitchText>
          <p>Join us in supporting the intersection of art and technology</p>
          <div className="sponsor-grid">
            <div className="sponsor-item">Adobe</div>
            <div className="sponsor-item">Figma</div>
            <div className="sponsor-item">Vercel</div>
            <div className="sponsor-item">OpenAI</div>
            <div className="sponsor-item">SF MOMA</div>
            <div className="sponsor-item">Gray Area</div>
          </div>
        </section>
        
        <div style={{ textAlign: 'center', margin: '60px 0' }}>
          <GlitchText tag="a" className="cta-button">Register Now</GlitchText>
          <GlitchText tag="a" className="cta-button">Become a Sponsor</GlitchText>
        </div>
      </div>
      
      <footer>
        <p>© 2024 HACK: TIAT | <span style={{ color: '#ff00ff' }}>Where Code Meets Canvas</span></p>
        <p style={{ marginTop: '10px', fontSize: '14px' }}>
          <span style={{ color: '#00ffff' }}>Individual Pass:</span> $10 | 
          <span style={{ color: '#00ffff' }}> Contact:</span> hello@hacktiat.art
        </p>
      </footer>
    </>
  );
}
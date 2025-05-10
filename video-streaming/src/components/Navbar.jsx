import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/Navbar.css";

function Navbar({ setLanguage }) {
  const [showSigninPopup, setShowSigninPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const navigate = useNavigate();

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src="/triflix.png" alt="Triflix Logo" className="logo-img" />
        </Link>
        <div className="nav-right">
          <Link to="/">Home</Link>
          <button className="upload-btn" onClick={() => setShowSignupPopup(true)}>Upload</button>

          {/* Language Selector */}
          <div className="language-dropdown">
            <span className="language-icon">🌐</span>
            <select onChange={(e) => setLanguage(e.target.value)}>
              <option value="English">English</option>
              <option value="Telugu">తెలుగు</option>
              <option value="Hindi">हिन्दी</option>
            </select>
          </div>

          <button className="signin-btn" onClick={() => setShowSigninPopup(true)}>Sign In</button>
          <button className="signup-btn" onClick={() => setShowSignupPopup(true)}>Sign Up</button>
        </div>
      </nav>

      {/* Sign In Popup */}
      {showSigninPopup && (
        <div className="popup" onClick={() => setShowSigninPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Sign In</h2>
            <form onSubmit={handleSignInSubmit}>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <a href="#" className="forgot-password">Forgot Password?</a>
              <p className="switch-popup">
                Don't have an account? 
                <span 
                  className="switch-link" 
                  onClick={() => { setShowSigninPopup(false); setShowSignupPopup(true); }}
                > Sign Up</span>
              </p>
              <button type="submit" className="dragon-btn">Enter the Dragon</button>
            </form>
          </div>
        </div>
      )}

      {/* Sign Up Popup */}
      {showSignupPopup && (
        <div className="popup" onClick={() => setShowSignupPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUpSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="number" placeholder="Age" required />
              <input type="email" placeholder="Email" required />
              <select required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input type="tel" placeholder="Contact Number" required />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm Password" required />
              <button type="submit" className="dragon-btn">LET'S BEGIN THE JOURNEY</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

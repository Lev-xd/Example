import './header.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../../../src/assets/img1.svg';
import img2 from '../../../src/assets/img2.svg';

const Header = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <header>
      <nav>
        
        <ul>
          <li><NavLink to="/"><img src={img1} alt="Logo" /></NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/courses">Courses</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contacts">Contacts</NavLink></li>
        </ul> 
        <div className="btn-reg">
          <button>Get consultation</button>
          <div className="img-boq">
            <img src={img2} alt="User" />
          </div>

        </div>


            <div>
            <button className='sign-in-btn' onClick={() => setShowModal(true)}>Sign in</button>

            {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowModal(false)}>×</button>
            <h2 className="modal-title">Sign in</h2>
            <p className="modal-subtitle">Sign in to your account using email and password provided during registration.</p>

            <form>
              <label>Email</label>
              <input type="email" placeholder="Your working email" />

              <label>Password</label>
              <div className="password-field">
                <input type="password" />
                <span className="eye-icon">👁️</span>
              </div>

              <div className="checkbox-row">
                <label>
                  <input type="checkbox" /> Keep me signed in
                </label>
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>

              <button type="submit" className="main-signin-btn">Sign in</button>
            </form>

            <p className="signup-text">
              Don’t have an account? <a href="#">Sign up</a>
            </p>

            <div className="social-signin">
              <span>Or sign in with</span>
              <div className="social-icons">
                <i className="fab fa-facebook-f">f</i>
                <i className="fab fa-google">G</i>
                <i className="fab fa-twitter">🐦</i>
                <i className="fab fa-linkedin-in">in</i>
              </div>
            </div>
          </div>
        </div>
      )}
      
            <button className='sign-in-btn' onClick={() => setShowModal(true)}>Sign up</button>

            {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowModal(false)}>×</button>

            <h2 className="modal-title">Sign up</h2>
            <p className="modal-subtitle">
              Registration takes less than a minute but gives you full control over your studying.
            </p>

            <form>
              <label>Full Name</label>
              <input type="text" placeholder="Your full name" />

              <label>Email</label>
              <input type="email" placeholder="Your working email" />

              <label>Password</label>
              <div className="password-field">
                <input type="password" />
                <span className="eye-icon">👁️</span>
              </div>

              <label>Confirm Password</label>
              <div className="password-field">
                <input type="password" />
                <span className="eye-icon">👁️</span>
              </div>

              <div className="checkbox-row">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
              </div>

              <button type="submit" className="main-signin-btn">Sign up</button>
            </form>

            <p className="signup-text">
              Already have an account? <a href="#">Sign in</a>
            </p>

            <div className="social-signin">
              <span>Or sign in with</span>
              <div className="social-icons">
                <i className="fab fa-facebook-f">f</i>
                <i className="fab fa-google">G</i>
                <i className="fab fa-twitter">🐦</i>
                <i className="fab fa-linkedin-in">in</i>
              </div>
            </div>
          </div>
        </div>
      )}
            </div>

      </nav>
    </header>
  );
};

export default Header;

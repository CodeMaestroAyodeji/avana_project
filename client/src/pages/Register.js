import React, { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import './Register.css';

// Check if the app is running in development mode
const isDevelopment = process.env.NODE_ENV === 'development';

const Register = () => {
  const [name, setName] = useState("");          // Added name field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isDevelopment || captchaValue) {
      if (password === confirmPassword) {
        setLoading(true);
        try {
          const response = await axios.post('http://localhost:5000/api/users/register', {
            name,        // Include name in the request
            email,       // Include email in the request
            password,    // Include password in the request
          });

          alert("Registration successful");
          console.log("User registered:", response.data);
          // Redirect to login or home page
          window.location.href = '/login';
        } catch (error) {
          console.error('Registration error:', error);
          setError('Registration failed. Please try again.');
        } finally {
          setLoading(false);
        }
      } else {
        alert("Passwords do not match");
      }
    } else {
      alert("Please complete the CAPTCHA");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>  {/* Added Name input field */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {!isDevelopment && (
          <div>
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              onChange={(value) => setCaptchaValue(value)}
            />
          </div>
        )}
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;

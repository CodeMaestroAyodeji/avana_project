import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./PasswordReset.css";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform password reset action (you will add API later)
    if (captchaValue) {
      console.log("Password reset requested for: ", email);
    } else {
      alert("Please complete the CAPTCHA");
    }
  };

  return (
    <div className="password-reset-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
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
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={(value) => setCaptchaValue(value)}
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default PasswordReset;

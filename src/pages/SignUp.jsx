import React, { useState } from "react";
import "./signup.css";

export default function Signup() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleMode = () => {
    setIsLogin((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with your API call
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(isLogin ? "Logging in:" : "Signing up:", data);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <p className="auth-subtitle">
          {isLogin
            ? "Login to continue"
            : "Sign up to get started"}
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <button type="submit" className="auth-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="auth-toggle">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={toggleMode}>
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

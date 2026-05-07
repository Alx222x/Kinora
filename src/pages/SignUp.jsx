import React, { useState } from "react";
import "./signup.css";
import { supabase } from "./supabaseClient";

export default function Signup() {
  const [isLogin, setIsLogin] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");

    if (isLogin) {
      // LOGIN
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) return setMessage(error.message);

      setMessage("Logged in successfully 🎉");
    } else {
      // SIGN UP
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

      if (error) return setMessage(error.message);

      setMessage("Check your email to confirm signup 📩");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <input name="name" placeholder="Full Name" required />
          )}

          <input name="email" type="email" placeholder="Email" required />

          <input name="password" type="password" placeholder="Password" required />

          <button type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {message && <p className="message">{message}</p>}

        <p className="auth-toggle">
          {isLogin ? "No account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
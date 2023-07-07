"use client";
import axios from "axios";
import { useState } from "react";
function LoginPage() {
  const [input, setInput] = useState({ email: "", password: "" });
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    const response = await axios.post("/api/signup", input);
    console.log(response);
  };
  return (
    <div>
      Login Page
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={handleInput}
          name="email"
        />
        <input
          type="password"
          placeholder="password"
          onChange={handleInput}
          name="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;

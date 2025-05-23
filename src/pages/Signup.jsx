import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const Signup = ({ setSignedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock login validation
    if (email && password) {
      setSignedIn(true); // update parent layout
      navigate("/"); // redirect to homepage or dashboard
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="flex flex-grow items-center justify-center min-h-[calc(100vh-120px)]">
      <form
        onSubmit={handleLogin}
        className=" bg-base-300 dark:bg-base-200 shadow-md rounded-lg px-8 pt-6 pb-8 w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-xl font-bold text-center">Nice to meet you!</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border rounded-full shadow appearance-none focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border rounded-full shadow appearance-none focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="flex items-center justify-around flex-col">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full mb-4"
          >
            Sign up
          </button>
          <Link to="/login">
            <p className="font-bold  text-center cursor-pointer hover:underline">
              Already have an account? Log in here!
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;

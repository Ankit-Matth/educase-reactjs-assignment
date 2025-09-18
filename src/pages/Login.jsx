import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/profile");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full h-screen md:w-[246.44px] md:h-[533.2px] border border-gray-400 p-5 relative bg-white">
        <div className="text-start">
          <h1 className="text-xl font-bold text-gray-900">
            Sign in to your <br /> PopX account
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-6 space-y-3">
          <div className="space-y-3">
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#6C25FF]"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-1 focus:outline-none"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#6C25FF]"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-1 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className={`w-full py-1.5 font-semibold text-sm rounded transition hover:cursor-pointer text-white ${
                isFormValid
                  ? "bg-purple-500"
                  : "bg-[#cbcbcb]"
              }`}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

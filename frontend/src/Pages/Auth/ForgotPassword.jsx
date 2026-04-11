import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    alert("Backend API not implemented yet ⚠️");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-[#111] p-8 rounded-xl shadow-lg w-96 border border-gray-800">
        
        <h2 className="text-xl text-white text-center mb-6">
          Reset Password
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white"
        />

        <button
          onClick={handleReset}
          className="w-full py-2 bg-[#9e024b] text-white rounded-lg"
        >
          Send Reset Link
        </button>

        <p className="text-center text-gray-400 mt-4">
          <Link to="/login" className="text-blue-500">
            Back to Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default ForgotPassword;
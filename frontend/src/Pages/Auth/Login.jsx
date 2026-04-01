import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      
      <div className="bg-[#111] p-8 rounded-xl shadow-lg w-96 border border-gray-800">
        
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Login into your account
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="w-full py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition">
          Login
        </button>


        <p className="text-center text-gray-400 text-sm mt-4">
      <Link to="/forgot-password" className="hover:underline text-blue-500">
        Forgot password?
        </Link>
        </p>

        <p className="text-center text-gray-400 text-sm mt-2">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500">Sign Up</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      
      <div className="bg-[#111] p-8 rounded-xl shadow-lg w-96 border border-gray-800">
        
        <h2 className="text-3xl font-bold text-white text-center mb-6 tracking-wide">
          Create Your Account
      </h2>

        <form className="flex flex-col">

          <input
            type="text"
            placeholder="User"
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* <button className="w-full py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition">
            Sign Up
          </button> */}

          <button className="w-full py-2 bg-[#9e024b] text-white rounded-lg font-semibold hover:bg-[#7c013a] transition">
  Sign Up
</button>

        </form>

        <p className="text-center text-gray-400 text-sm mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;
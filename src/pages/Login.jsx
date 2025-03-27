import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-between mb-6">
          <button 
            className={`w-1/2 py-2 font-semibold ${isLogin ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={`w-1/2 py-2 font-semibold ${!isLogin ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {isLogin ? (
          <form className="space-y-4">
            <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your email" 
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your password" 
              />
            </div>
            <div className="text-right">
              <a href="/forgot-password" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Login
            </button>
            <p className="text-gray-600 text-sm text-center mt-4">
              Don't have an account? <button className="text-blue-500 hover:underline" onClick={() => setIsLogin(false)}>Sign up</button>
            </p>
          </form>
        ) : (
          <form className="space-y-4">
            <h1 className="text-2xl font-bold text-center text-gray-800">Sign Up</h1>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your full name" 
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your email" 
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your password" 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Sign Up
            </button>
            <p className="text-gray-600 text-sm text-center mt-4">
              Already have an account? <button className="text-blue-500 hover:underline" onClick={() => setIsLogin(true)}>Login</button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;

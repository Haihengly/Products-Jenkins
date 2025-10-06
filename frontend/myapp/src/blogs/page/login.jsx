import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
      <div className="flex w-[900px] h-[500px] bg-white bg-opacity-0 rounded-xl shadow-lg overflow-hidden">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center pl-16 pr-8">
          <h1 className="text-white text-4xl font-bold mb-6">Welcome to website</h1>
        </div>
        {/* Right Side */}
        <div className="flex-1 bg-white flex flex-col justify-center items-center px-12">
          <h2 className="text-blue-700 text-xl font-semibold mb-8">USER LOGIN</h2>
          <form className="w-full max-w-xs">
            <div className="mb-4">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <span className="material-icons text-gray-400 mr-2">person</span>
                <input
                  type="text"
                  placeholder="Username"
                  className="bg-transparent outline-none flex-1 text-gray-700"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <span className="material-icons text-gray-400 mr-2">lock</span>
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-transparent outline-none flex-1 text-gray-700"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mb-6 text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-500">Remember</span>
              </label>
              <a href="#" className="text-blue-400 hover:underline">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 text-white font-bold shadow-md hover:scale-105 transition"
            >
              <Link to="/welcome"> LOGIN </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}

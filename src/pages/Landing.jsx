import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-[246px] h-[533px] border border-gray-400 p-5 bg-white relative">
        
        <div className="absolute bottom-6 left-0 w-full px-4">
          
          <div className="text-start">
            <h1 className="text-lg font-bold text-gray-900">Welcome to PopX</h1>
            <p className="text-xs text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <Link
              to="/signup"
              className="w-full py-2 px-2 bg-[#6C25FF] text-white font-semibold text-xs text-center rounded hover:cursor-pointer"
            >
              Create Account
            </Link>
           
            <Link to='/login' className="w-full text-center px-2 py-2 bg-[#6C25FF4B] text-xs font-semibold text-black rounded transition-all">
              Already Registered? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Home, Settings } from 'lucide-react'

const Navbar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  // Temporary state to test the toggle logic
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleDelete = () => {
    if (window.confirm("Are you sure? This will permanently delete your comic history.")) {
      console.log("Deleting data...");
    }
  };

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-black">
      <div className="flex items-center gap-4">
        <Home className="text-gray-400 w-5 h-5" />
        <Link href="/" className="text-xl font-bold text-white">MissComic</Link>
      </div>

      <ul className="flex items-center gap-6">
        <li>
          <Link href="/browse" className="text-gray-400 hover:text-white transition">Browse</Link>
        </li>

        {/* Your Custom Hamburger / Action Icon */}
        <button className="text-2xl hover:animate-bounce">
          🍔 {/* Replace this with your Lottie/SVG code later */}
        </button>

        <div className="relative">
          <button 
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className="flex items-center text-gray-400 hover:text-white transition-all"
          >
            <Settings className={`w-6 h-6 transition-transform duration-500 ${isSettingsOpen ? 'rotate-180' : 'rotate-0'}`} />
          </button>

          {isSettingsOpen && (
            <div className="absolute right-0 mt-4 w-52 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl z-50">
              <div className="flex flex-col p-2">
                {isLoggedIn ? (
                  <>
                    <Link href="/profile" className="p-3 hover:bg-purple-600 rounded-lg text-white">Profile</Link>
                    <Link href="/dashboard" className="p-3 hover:bg-purple-600 rounded-lg text-white">Dashboard</Link>
                    <button onClick={handleDelete} className="text-left p-3 text-red-400 hover:bg-red-900 rounded-lg">Delete My Data</button>
                    <hr className="border-gray-800 my-1" />
                    <button onClick={() => setIsLoggedIn(false)} className="text-left p-3 hover:bg-gray-800 rounded-lg text-white">Logout</button>
                  </>
                ) : (
                  <Link href="/auth/signup" className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-center">
                    Sign Up / Login
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </ul>
    </nav>
  )
}

export default Navbar

'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Home, Settings } from 'lucide-react'

const Navbar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  
  // 1. Create a reference for the dropdown container
  const menuRef = useRef(null);

  // 2. This effect handles the "Click Outside" logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the menu is open AND the click was NOT inside the menuRef
      if (isSettingsOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsSettingsOpen(false);
      }
    };

    // Attach the listener to the document
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSettingsOpen]); // Re-run whenever the menu state changes

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

        {/* 3. Wrap the button and menu in a div and attach the ref */}
        <div className="relative" ref={menuRef}>
          <button 
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className="flex items-center text-gray-400 hover:text-white transition-all"
          >
            <Settings className={`w-6 h-6 transition-transform duration-500 ${isSettingsOpen ? 'rotate-180' : 'rotate-0'}`} />
          </button>

          {isSettingsOpen && (
            <div className="absolute right-0 mt-4 w-52 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl z-50">
              <div className="flex flex-col p-2 text-sm">
                {isLoggedIn ? (
                  <>
                    <Link href="/profile" className="p-3 hover:bg-purple-600 rounded-lg text-white transition">Profile</Link>
                    <Link href="/dashboard" className="p-3 hover:bg-purple-600 rounded-lg text-white transition">Dashboard</Link>
                    <hr className="border-gray-800 my-1" />
                    <button onClick={() => setIsLoggedIn(false)} className="text-left p-3 hover:bg-gray-800 rounded-lg text-white transition">Logout</button>
                  </>
                ) : (
                  <Link href="/auth/signup" className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-center font-bold">
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

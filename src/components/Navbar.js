'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Home, Settings, Menu } from 'lucide-react' // Basic icons

const Navbar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-black">
      <div className="flex items-center gap-4">
        {/* Home Icon - Visual only */}
        <Home className="text-gray-400 w-5 h-5 cursor-default" />
        
        <Link href="/" className="text-xl font-bold text-white tracking-tight">
          MissComic
        </Link>
      </div>

      <ul className="flex items-center gap-6 list-none">
        <li>
          <Link href="/browse" className="text-gray-400 hover:text-white transition">
            Browse
          </Link>
        </li>

        {/* Hamburger Icon - Placeholder for cartoony SVG */}
        <button className="hover:scale-110 transition-transform active:rotate-12">
          <div className="text-2xl">🍔</div> 
        </button>

        {/* Settings Button & Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className="flex items-center text-gray-400 hover:text-white transition-all duration-300"
          >
            <Settings 
              className={`w-6 h-6 transition-transform duration-500 ${isSettingsOpen ? 'rotate-180' : 'rotate-0'}`} 
            />
          </button>

          {/* Settings Menu Dropdown */}
          {isSettingsOpen && (
            <div className="absolute right-0 mt-4 w-48 bg-gray-900 border border-gray-700 rounded-xl shadow-xl overflow-hidden z-50">
              <div className="flex flex-col text-sm text-gray-300">
                <Link href="/profile" className="px-4 py-3 hover:bg-purple-600 hover:text-white transition">Profile</Link>
                <Link href="/dashboard" className="px-4 py-3 hover:bg-purple-600 hover:text-white transition">Dashboard</Link>
                <button className="text-left px-4 py-3 hover:bg-purple-600 hover:text-white transition">UI Settings</button>
                <hr className="border-gray-700" />
                <button className="text-left px-4 py-3 hover:bg-red-600 hover:text-white transition">Logout</button>
                <button className="text-left px-4 py-3 text-red-500 hover:bg-red-900 hover:text-white transition">Delete My Data</button>
              </div>
            </div>
          )}
        </div>

        <li>
          <Link href="/auth/signup" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition">
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

export default Navbar

'use client'

import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
      <Link href="/" className="text-xl font-bold text-white">
        MissComic
      </Link>
      <ul className="flex gap-6 list-none">
        <li>
          <Link href="/browse" className="text-gray-400 hover:text-white transition">
            Browse
          </Link>
        </li>
        <li>
          <Link href="/auth/login" className="text-gray-400 hover:text-white transition">
            Login
          </Link>
        </li>
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

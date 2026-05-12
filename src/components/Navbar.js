export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
      <a href="/" className="text-xl font-bold text-white">
        MissComic
      </a>
      <ul className="flex gap-6 text-gray-400 list-none">
        <li><a href="/browse" className="hover:text-white transition">Browse</a></li>
        <li><a href="/auth/login" className="hover:text-white transition">Login</a></li>
        <li>
          <a href="/auth/signup" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition">
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  )
}

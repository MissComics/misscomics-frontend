export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        MissComic
      </h1>
      <p className="mt-4 text-lg text-gray-400 max-w-md">
        Where stories find their readers.
      </p>

      <div className="mt-8 flex gap-4">
        
          href="/reader/bookmarks"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-semibold transition"
        >
          Start Reading
        </a>
        
          href="/creator/dashboard"
          className="px-6 py-3 border border-gray-700 hover:border-gray-500 rounded-xl text-white font-semibold transition"
        >
          Creator Dashboard
        </a>
      </div>

      <div className="mt-10 p-6 border border-gray-800 rounded-xl bg-gray-900/50">
        <h2 className="text-xl font-bold text-white">Status: Building</h2>
        <p className="text-sm text-gray-500 mt-2">
          MissComic is currently in development.
        </p>
      </div>
    </main>
  )
}

import BookmarkButton from '@/components/BookmarkButton'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-black">
      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        MissComic
      </h1>
      <p className="mt-4 text-lg text-gray-400 max-w-md">
        The cloud workshop is officially open.
      </p>
      <div className="mt-10 p-6 border border-gray-800 rounded-xl bg-gray-900/50">
        <h2 className="text-xl font-bold text-white">Bouncer Status: Ready</h2>
        <p className="text-sm text-gray-500 mt-2">Next step: Building the partner links.</p>
        <div className="mt-4">
          <BookmarkButton />
        </div>
      </div>
    </main>
  )
}

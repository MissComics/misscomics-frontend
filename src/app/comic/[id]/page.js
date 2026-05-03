export default function ComicPage({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-2xl font-bold text-white">
        Comic Reader
      </h1>
      <p className="text-gray-400 mt-2">Comic ID: {params.id}</p>
      <p className="text-gray-500 mt-1">Coming soon</p>
    </main>
  )
}

import { BookMarked } from 'lucide-react'

export default function BookmarkButton() {
  return (
    <button 
      className="p-2 rounded-full hover:bg-gray-800 active:scale-90 transition-all duration-150"
      onClick={() => console.log('bookmarked')}
    >
      <BookMarked className="w-6 h-6 text-purple-400" />
    </button>
  )
}

import './globals.css'

export const metadata = {
  title: 'MissComic',
  description: 'Read and support your favourite comic creators',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}

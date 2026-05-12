import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'MissComic',
  description: 'Read and support your favourite comic creators',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}

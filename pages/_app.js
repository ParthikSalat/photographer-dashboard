import '@/styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="bg-[var(--navbar-bg)] shadow-sm p-4">

        <div className="max-w-5xl mx-auto flex justify-between items-center">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/image.png" // Place logo image in /public folder
              alt="PhotoDash Logo"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-gray-800">PhotoDash</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/portfolio" className="hover:underline">Portfolio</Link>
            <Link href="/about" className="hover:underline">About us</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>


          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <nav className="md:hidden mt-2 flex flex-col items-center gap-3 bg-gray-50 p-4 text-sm text-gray-700">
            <Link href="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/portfolio" className="hover:underline" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link href="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        )}
      </header>

      <main className="max-w-5xl mx-auto p-4">
        <Component {...pageProps} />
      </main>
    </>
  )
}

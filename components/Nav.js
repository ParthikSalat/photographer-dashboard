import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="bg-white shadow-sm p-4">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                {/* Logo + Brand */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png" // Place your logo in the /public folder
                        alt="PhotoDash Logo"
                        width={36}
                        height={36}
                        className="rounded-full"
                    />
                    <span className="text-xl font-bold text-gray-800">PhotodddDash</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
                    <Link href="/">Home</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/contact">Contact</Link>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="md:hidden mt-2 flex flex-col items-center gap-3 bg-gray-50 p-4 text-gray-700">
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </nav>
            )}
        </header>
    )
}

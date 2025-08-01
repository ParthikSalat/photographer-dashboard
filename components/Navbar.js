import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-white py-6 text-center border-b border-gray-200">
            {/* Logo */}
            <Link href="/" className="block text-2xl font-bold text-blue-700 hover:underline mb-2">
                My Photography
            </Link>

            {/* Navigation Links */}
            <div className="space-x-6 text-sm font-medium text-gray-700">
                <Link href="/">Welcome</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/shop">Shop</Link>
            </div>
        </nav>
    )
}

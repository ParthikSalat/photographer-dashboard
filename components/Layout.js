export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {children}
            </main>
            <Footer />
        </>
    )
}

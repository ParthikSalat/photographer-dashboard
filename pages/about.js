import Image from 'next/image'

export default function About() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
            {/* Intro */}
            <section className="text-center">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    I&apos;m a passionate photographer who loves capturing moments that tell real, honest stories — whether it&apos;s portraits, weddings, travel, or nature.
                </p>
            </section>

            {/* Profile Section */}
            <section className="flex flex-col md:flex-row items-center gap-8">
                <Image
                    src="/me.jpg"
                    alt="Photographer"
                    width={160}
                    height={160}
                    className="rounded-full object-cover shadow-lg"
                />
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Hi, I&apos;m Yana</h2>
                    <p className="text-gray-700">
                        I&apos;ve been shooting professionally for over [X years], with a focus on [portrait / event / street / nature / editorial] photography.
                        I believe in making people feel comfortable in front of the camera and capturing their most authentic selves.
                    </p>
                </div>
            </section>

            {/* Gear Section */}
            <section>
                <h3 className="text-xl font-semibold mb-2">What I Use</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>📷 Canon EOS R6</li>
                    <li>🎥 Sigma Art Lenses</li>
                    <li>💻 Adobe Lightroom & Photoshop</li>
                </ul>
            </section>
        </div>
    )
}

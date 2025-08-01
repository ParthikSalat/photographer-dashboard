import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null)
  const images = ['/photo1.jpg', '/photo2.jpg', '/photo3.jpg']

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">

      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Capturing Moments That Matter
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
          Hi, I&apos;m a passionate photographer turning your memories into timeless art. Explore my latest work below.
        </p>
        <Link href="/portfolio">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            View Portfolio
          </button>
        </Link>
      </section>

      {/* Portfolio Section */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">Latest Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="aspect-[4/3] overflow-hidden rounded-lg shadow-md cursor-pointer">
              <Image
                src={src}
                alt={`Photo ${idx + 1}`}
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                onClick={() => setSelectedImage(src)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="Full View"
            width={800}
            height={600}
            className="max-w-3xl max-h-[90vh] object-contain rounded-lg"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-2xl bg-black bg-opacity-50 rounded-full px-4 py-2"
          >
            ✕
          </button>
        </div>
      )}

      {/* Call to Action */}
      <section className="text-center py-10">
        <h3 className="text-xl font-medium mb-2">Want to work together?</h3>
        <Link href="/contact">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-500 transition">
            Contact Me
          </button>
        </Link>
      </section>

      {/* About Preview */}
      <section className="text-center py-12 px-4 bg-gray-100 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-4">
          I&apos;m a professional photographer passionate about capturing authentic moments — whether it&apos;s people, places, or emotions. Learn more about my story, style, and what drives my work.
        </p>
        <Link href="/about">
          <button className="bg-white text-black border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition">
            Read More
          </button>
        </Link>
      </section>
    </div>
  )
}

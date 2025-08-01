'use client'

import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
// Remove the zoom.css import — it's not needed and causes errors

export default function Portfolio() {
    const images = [
        '/photo1.jpg',
        '/photo2.jpg',
        '/photo3.jpg',
        '/photo4.jpg',
        '/photo5.jpg',
        '/photo6.jpg',
    ]

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0)

    return (
        <div className="space-y-12 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Title */}
            <section className="text-center">
                <h1 className="text-4xl font-bold mb-2">My Portfolio</h1>
                <p className="text-gray-600">
                    A collection of moments, people, and places I’ve captured.
                </p>
            </section>

            {/* Image Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`Portfolio ${idx + 1}`}
                        className="w-full h-auto rounded-lg shadow-md cursor-zoom-in object-cover aspect-[4/3]"
                        onClick={() => {
                            setIndex(idx)
                            setOpen(true)
                        }}
                    />
                ))}
            </section>

            {/* Lightbox Modal */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={images.map((src) => ({ src }))}
                plugins={[Zoom]}
            />
        </div>
    )
}

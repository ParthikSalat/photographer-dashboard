import { useState } from 'react'

export default function Contact() {
    const [status, setStatus] = useState('idle')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')

        const form = e.target
        const data = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
        }

        const response = await fetch('https://formspree.io/f/xwpqqjgg', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            setStatus('success')
            form.reset()
        } else {
            setStatus('error')
        }
    }

    return (
        <div className="max-w-xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>

            {status === 'success' && (
                <div className="mb-4 text-green-600">Thanks! Your message has been sent.</div>
            )}
            {status === 'error' && (
                <div className="mb-4 text-red-600">Oops! Something went wrong. Try again.</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2 border rounded"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                    className="w-full px-4 py-2 border rounded"
                ></textarea>
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
                >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    )
}

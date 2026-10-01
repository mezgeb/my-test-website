import { useState, type FormEvent } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // For now just log — swap for a real form service later (Formspree, Netlify Forms, etc.)
    console.log({ name, email, message })
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section className="space-y-6 max-w-xl">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>

      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-md px-4 py-3 text-sm">
          Thanks — your message was captured (check the browser console for now).
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-700 transition-colors"
        >
          Send message
        </button>
      </form>
    </section>
  )
}

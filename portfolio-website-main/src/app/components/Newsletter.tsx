'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Newsletter() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    if (!formRef.current) return

    // Using your existing EmailJS credentials
    emailjs.sendForm(
      'service_arv2emq',     
      'template_kbvbw7s',    
      formRef.current,
      'yq2r4XbLSO-gEgGfe'    
    )
    .then(() => {
      setStatus('success')
      formRef.current?.reset()
      // Reset status message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    })
    .catch((error) => {
      console.error('EmailJS Error:', error)
      setStatus('error')
    })
  }

  return (
    <section className="py-20">
      <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden animate-slide-up">
        <div className="p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Subscribe to My Newsletter</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Get the latest updates on my projects and tech insights delivered straight to your inbox.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <form 
                  ref={formRef} 
                  onSubmit={handleSubscribe} 
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <input
                    type="email"
                    name="from_email" // Matches {{from_email}} in your EmailJS template
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border dark:text-white border-gray-300 dark:border-gray-600 bg-white text-gray-500 dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  
                  {/* Hidden fields to reuse your existing Contact Template */}
                  <input type="hidden" name="from_name" value="Newsletter Subscriber" />
                  <input type="hidden" name="message" value="New subscription request from your portfolio website." />

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>

                {/* Status Feedback Messages */}
                {status === 'success' && (
                  <p className="text-green-500 text-sm mt-2 font-medium">
                    Success! You have been subscribed. 🎉
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 text-sm mt-2 font-medium">
                    Oops! Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
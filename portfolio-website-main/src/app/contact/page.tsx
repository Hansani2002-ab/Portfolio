'use client'

import { useState, useRef } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/utils/animations'
import emailjs from '@emailjs/browser'

// 1. Updated Interface keys to match input names
interface FormData {
  from_name: string;
  from_email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  
  // 2. Updated initial state keys
  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    from_email: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    if (!formRef.current) return

    emailjs.sendForm(
      'service_arv2emq',     
      'template_kbvbw7s',   
      formRef.current,
      'yq2r4XbLSO-gEgGfe'
    )
    .then(() => {
      setStatus('success')
      // 3. Reset using updated keys
      setFormData({ from_name: '', from_email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    })
    .catch((error) => {
      console.error('EmailJS Error:', error)
      setStatus('error')
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInUp}
      >
        Contact Me
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div className="space-y-8" {...slideInLeft}>
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-secondary">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </motion.div>
          
          <div className="space-y-4">
            <motion.div className="flex items-center gap-4" whileHover={{ x: 10 }}>
              <FaEnvelope className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:hansanimadurangi21@gmail.com" className="text-secondary hover:text-primary">
                  hansanimadurangi21@gmail.com
                </a>
              </div>
            </motion.div>
            
            <motion.div className="flex items-center gap-4" whileHover={{ x: 10 }}>
              <FaPhone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+94776185682" className="text-secondary hover:text-primary">
                 077 - 6185682
                </a>
              </div>
            </motion.div>
            
            <motion.div className="flex items-center gap-4" whileHover={{ x: 10 }}>
              <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-secondary">Weliweriya, Gampaha</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          {...slideInRight}
        >
          <motion.form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="space-y-6"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="from_name" // 4. This matches the state key 'from_name'
                value={formData.from_name} // 5. Use the updated key here
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary outline-none"
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="from_email" // 6. This matches the state key 'from_email'
                value={formData.from_email} // 7. Use the updated key here
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary outline-none"
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary outline-none"
              />
            </motion.div>
            
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="w-full btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </motion.button>
            
            {status === 'success' && (
              <p className="text-green-500 text-center mt-2">Message sent successfully!</p>
            )}
            
            {status === 'error' && (
              <p className="text-red-500 text-center mt-2">Failed to send message. Try again.</p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  )
}
'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations';
import NetworkBackground from './NetworkBackground';

export default function Hero() {
  return (
    <section className="py-28 relative overflow-hidden">
       <NetworkBackground/>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Animated & Enlarged Profile Image */}
          <motion.div 
            className='flex justify-center items-center mb-10'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0] // Gentle floating effect
            }}
            transition={{ 
              duration: 1,
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div className="relative group">
              {/* Decorative Gradient Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-blue-400 to-primary rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
              
              <Image 
                src="/profile.png" // Path kept as requested
                alt="Profile" 
                width={180} // Increased size
                height={180} 
                className="relative rounded-full w-44 h-44 object-cover ring-4 ring-white dark:ring-gray-900 shadow-2xl transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m <motion.span 
              className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Hansani
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
           Web Developer
          </motion.p>

          {/* Social Links with Hover Effects */}
          <motion.div 
            className="flex justify-center space-x-8 mb-12"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            {[
              { Icon: FaGithub, href: "https://github.com/Hansani2002-ab" },
              { Icon: FaLinkedin, href: "https://linkedin.com/in/hansani-madurangi-a2a176335/" },
              
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-500 hover:text-primary transition-all duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.Icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="bg-primary shadow-xl shadow-primary/20 inline-block w-full sm:w-auto text-white px-10 py-4 rounded-full font-bold hover:brightness-110 transition-all"
              >
                View My Work
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block w-full sm:w-auto bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white px-10 py-4 rounded-full font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
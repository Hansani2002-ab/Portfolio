'use client'

import { FaCode, FaLaptopCode, FaGraduationCap, FaProjectDiagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center leading-relaxed">
          I'm an enthusiastic Software Engineering undergraduate and an aspiring Web Developer. 
          I am deeply passionate about learning new technologies and building modern, 
          user-friendly web applications. Currently, I am focused on mastering full-stack 
          web development and exploring the latest trends in the tech industry.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          {...fadeInUp}
        >
          My Skills
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Frontend */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>
          
          {/* Backend */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>MySQL / PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>
          
          {/* Tools */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Learning</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>VS Code</li>
              <li>Vercel</li>
              <li>UI/UX Basics</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md border-l-4 border-primary"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-1">BSc (Hons) in Software Engineering</h3>
            <p className="text-primary font-medium mb-2">CINEC Campus • 2023 - Present</p>
            <p className="text-secondary">
              Relevant Coursework: Data Structures, Algorithms, Web Development, and Database Management Systems.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Personal Projects Placeholder - Good for Undergraduates */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          {...fadeInUp}
        >
          What I'm Working On
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md text-center"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <FaProjectDiagram className="h-8 w-8 text-primary mx-auto mb-4" />
            <p className="text-secondary">
              I am currently building projects to strengthen my skills in <strong>Full Stack Development</strong>. 
              Check out my <span className="text-primary font-bold">Projects</span> page to see what I've been building!
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}
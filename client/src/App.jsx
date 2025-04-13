import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Traction from './components/Traction'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  const { darkMode } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main className="pt-16">
          <Hero />
          <Problem />
          <Solution />
          <Traction />
          <ContactForm />
        </main>
        <Footer />

        {/* Scroll to top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 rounded-full bg-primary dark:bg-primary text-white shadow-lg hover:shadow-xl z-50 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Cursor follower (visible only on desktop) */}
        <div className="hidden md:block">
          <CursorFollower />
        </div>
      </div>
    </div>
  )
}

// Custom cursor follower component with trail effect
const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailPositions, setTrailPositions] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);

      // Add new position to trail and keep only the last 3 positions
      setTrailPositions(prev => {
        const updated = [...prev, newPosition];
        return updated.slice(-3);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary opacity-40 pointer-events-none mix-blend-screen z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 350
        }}
      />

      {/* Trail elements */}
      {trailPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 rounded-full pointer-events-none mix-blend-screen z-40"
          style={{
            background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))',
            width: `${8 - i * 1.5}px`,
            height: `${8 - i * 1.5}px`,
            opacity: 0.2 - i * 0.05
          }}
          animate={{
            x: pos.x - (4 - i * 0.75),
            y: pos.y - (4 - i * 0.75)
          }}
          transition={{
            type: 'spring',
            damping: 15 + i * 5,
            stiffness: 200
          }}
        />
      ))}
    </>
  );
};

export default App

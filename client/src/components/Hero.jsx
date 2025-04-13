import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import WaitlistForm from './WaitlistForm';

const Hero = () => {
  const { darkMode } = useTheme();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, filter: 'blur(5px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    initial: { y: 0, x: 0 },
    animate: {
      y: [-10, 0, -5, 0],
      x: [0, 5, 0, -5],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.33, 0.66, 1]
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.8, boxShadow: '0 0 0 rgba(var(--color-primary-rgb), 0.4)' },
    animate: {
      scale: [1, 1.05, 1.02, 1.05, 1],
      opacity: [0.8, 1, 0.9, 1, 0.8],
      boxShadow: [
        '0 0 0 rgba(var(--color-primary-rgb), 0.4)',
        '0 0 20px rgba(var(--color-primary-rgb), 0.6)',
        '0 0 10px rgba(var(--color-primary-rgb), 0.5)',
        '0 0 20px rgba(var(--color-primary-rgb), 0.6)',
        '0 0 0 rgba(var(--color-primary-rgb), 0.4)'
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1]
      }
    }
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark dark:text-white leading-tight mb-4">
                AI for <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Dementia Care</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
            >
              Revolutionizing dementia care with AI-powered memory assistance.
              Helping patients remember, reconnect, and regain independence.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-medium px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request Demo
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-6 mb-2">Join our waitlist for early access:</h3>
              <WaitlistForm />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center space-x-4"
            >
              <div className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://randomuser.me/api/portraits/men/43.jpg" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://randomuser.me/api/portraits/women/51.jpg" alt="User" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Trusted by <span className="font-semibold text-gray-700 dark:text-gray-300">500+</span> caregivers</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Main illustration */}
              <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className="w-full max-w-md h-64 md:h-80 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-gray-900 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden relative"
              >
                {/* Brain icon with pulse effect */}
                <motion.div
                  variants={pulseVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg className="w-40 h-40 text-primary/30 dark:text-primary/20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z" />
                  </svg>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-10 left-10 w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full"
                  animate={{
                    y: [0, 15, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut'
                  }}
                />

                <motion.div
                  className="absolute bottom-10 right-10 w-20 h-20 bg-secondary/10 dark:bg-secondary/20 rounded-full"
                  animate={{
                    y: [0, -15, 0],
                    x: [0, -10, 0],
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 0]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut'
                  }}
                />

                <motion.div
                  className="absolute top-1/2 right-5 w-12 h-12 bg-yellow-400/10 dark:bg-yellow-400/20 rounded-full"
                  animate={{
                    y: [0, 20, 0],
                    scale: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut'
                  }}
                />

                {/* Main icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="relative z-10"
                >
                  <svg className="w-32 h-32 text-primary dark:text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                  </svg>
                </motion.div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary rounded-lg shadow-lg"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />

              <motion.div
                className="absolute -top-6 -left-6 w-12 h-12 bg-secondary rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

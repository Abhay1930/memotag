import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const Problem = () => {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });
  const { darkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.2,
        ease: "easeOut",
        scale: { type: "spring", stiffness: 100 }
      }
    })
  };

  const statsData = [
    {
      value: "55M+",
      title: "People Affected",
      description: "Dementia affects over 55 million people worldwide, with numbers doubling every 20 years.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
      )
    },
    {
      value: "$1.3T",
      title: "Annual Cost",
      description: "The global economic burden of dementia exceeds $1.3 trillion annually in care costs.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      value: "70%",
      title: "Diagnostic Gap",
      description: "Up to 70% of dementia cases go undiagnosed in low and middle-income countries.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="problem" className="py-20 md:py-28 bg-light dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-3">
            <span className="bg-primary/10 dark:bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-medium">The Challenge</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-dark dark:text-white mb-6">
            The Dementia Challenge
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dementia affects millions worldwide, with devastating impacts on memory, independence, and quality of life.
          </motion.p>
        </motion.div>

        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={statsVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl dark:shadow-gray-900/30 hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 dark:bg-primary/10 rounded-bl-full"></div>

              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-lg mb-6 text-primary">
                {stat.icon}
              </div>

              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3"
              >
                {stat.value}
              </motion.div>

              <h3 className="text-xl font-semibold text-dark dark:text-white mb-3">{stat.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.description}</p>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl dark:shadow-gray-900/30 text-center"
        >
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Current solutions focus primarily on institutional care rather than enabling independence and quality of life at home.
            <span className="block mt-4 font-semibold text-primary dark:text-primary">MemoTag is changing that.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;

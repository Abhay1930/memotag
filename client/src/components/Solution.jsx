import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Solution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="solution" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
            How MemoTag Works
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our AI-powered solution helps dementia patients maintain independence and connection through personalized memory assistance.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            variants={itemVariants}
            className="bg-light dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300"
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">1. Tag Objects</h3>
            <p className="text-gray-600 dark:text-gray-300">Place MemoTag sensors on important household items and personal belongings.</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-light dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300"
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">2. Connect App</h3>
            <p className="text-gray-600 dark:text-gray-300">Our mobile app connects to tags and builds a personalized memory network.</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-light dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300"
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">3. AI Learning</h3>
            <p className="text-gray-600 dark:text-gray-300">Our AI learns usage patterns and important associations to provide timely assistance.</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-light dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300"
          >
            <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">4. Find & Remember</h3>
            <p className="text-gray-600 dark:text-gray-300">Easily locate items and receive personalized memory prompts when needed.</p>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 bg-primary/5 dark:bg-primary/10 p-6 rounded-lg border border-primary/20 dark:border-primary/30 transition-colors duration-300"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
              <svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="md:w-3/4 md:pl-6">
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">AI-Powered Memory Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                MemoTag's proprietary AI algorithms analyze patterns and provide increasingly personalized support over time.
                Our system integrates with caregivers' workflows, providing valuable insights while respecting patient privacy and dignity.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;

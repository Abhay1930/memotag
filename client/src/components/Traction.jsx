import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Traction = () => {
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
    <section id="traction" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
            Our Traction
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            MemoTag is rapidly gaining adoption among healthcare providers, caregivers, and patients.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md dark:shadow-gray-900/30 text-center transition-colors duration-300"
          >
            <div className="text-primary text-4xl font-bold mb-2">500+</div>
            <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">Preorders</h3>
            <p className="text-gray-600 dark:text-gray-300">From caregivers and healthcare facilities across the country.</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md dark:shadow-gray-900/30 text-center transition-colors duration-300"
          >
            <div className="text-primary text-4xl font-bold mb-2">3</div>
            <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">Pilot Programs</h3>
            <p className="text-gray-600 dark:text-gray-300">Active in leading memory care facilities with promising early results.</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md dark:shadow-gray-900/30 text-center transition-colors duration-300"
          >
            <div className="text-primary text-4xl font-bold mb-2">92%</div>
            <h3 className="text-xl font-semibold text-dark dark:text-white mb-2">Satisfaction</h3>
            <p className="text-gray-600 dark:text-gray-300">From early users reporting improved quality of life and independence.</p>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md dark:shadow-gray-900/30 transition-colors duration-300"
        >
          <h3 className="text-xl font-semibold text-dark dark:text-white mb-6 text-center">Trusted By</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="text-gray-400 dark:text-gray-500 font-semibold">Memory Care Inc.</div>
            </div>
            <div className="flex items-center justify-center h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="text-gray-400 dark:text-gray-500 font-semibold">Caregiver Alliance</div>
            </div>
            <div className="flex items-center justify-center h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="text-gray-400 dark:text-gray-500 font-semibold">NeuroHealth Partners</div>
            </div>
            <div className="flex items-center justify-center h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="text-gray-400 dark:text-gray-500 font-semibold">Elder Tech Fund</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md dark:shadow-gray-900/30 transition-colors duration-300"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0">
              <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto overflow-hidden transition-colors duration-300">
                {/* Placeholder for testimonial image */}
                <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div className="md:w-3/4 md:pl-6">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "MemoTag has transformed how we provide memory care. Our patients show increased independence and reduced anxiety.
                The data insights have helped us personalize care plans in ways we never could before."
              </p>
              <div className="font-semibold text-dark dark:text-white">Dr. Sarah Johnson</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Director of Memory Care, Sunshine Living</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Traction;

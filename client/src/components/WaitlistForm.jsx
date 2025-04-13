import { useState } from 'react';
import { motion } from 'framer-motion';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('caregiver');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Use environment variable for API URL in production
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      console.log('Submitting to API URL:', `${API_URL}/api/waitlist`);

      const response = await fetch(`${API_URL}/api/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, userType }),
      });

      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response data:', result);

      if (!response.ok) throw new Error(result.message || result.error || 'Something went wrong');

      setStatus({
        submitted: true,
        success: true,
        message: result.message || 'You have been added to our waitlist! We will keep you updated.'
      });

      // Reset form
      setEmail('');
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      setStatus({
        submitted: true,
        success: false,
        message: error.message || 'There was an error adding you to the waitlist. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6">
      {status.submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 rounded-md ${status.success ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400' : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400'}`}
        >
          {status.message}
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white flex-grow"
            required
          />
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white sm:w-auto"
          >
            <option value="caregiver">Caregiver</option>
            <option value="patient">Patient</option>
            <option value="healthcare">Healthcare Professional</option>
            <option value="investor">Investor</option>
          </select>
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-6 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-md transition-colors duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Joining...' : 'Join Waitlist'}
          </motion.button>
        </form>
      )}
    </div>
  );
};

export default WaitlistForm;

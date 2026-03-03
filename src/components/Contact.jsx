import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

// Web3Forms - Free, no API key needed!
// Get your free access key from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = '79f5e8d6-1e97-48e7-99f4-0dc9f4999a00';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'
  const [errors, setErrors] = useState([]);

  const validateForm = () => {
    const newErrors = [];
    
    if (!formData.name.trim()) {
      newErrors.push('Name is required');
    }
    
    if (!formData.email.trim()) {
      newErrors.push('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.push('Please enter a valid email address');
    }
    
    if (!formData.message.trim()) {
      newErrors.push('Message is required');
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setStatus('sending');
    setErrors([]);
    
    try {
      // If using Web3Forms with access key
      if (WEB3FORMS_ACCESS_KEY !== 'YOUR_ACCESS_KEY_HERE') {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            from_name: formData.name,
            email: formData.email,
            message: formData.message,
            to_email: 'himanshukhobragade2005@gmail.com'
          }),
        });
        
        const data = await response.json();
        
        if (data.success) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error(data.message || 'Failed to send');
        }
      } else {
        // Demo mode - simulate success (remove this in production)
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setErrors([`Failed to send message: ${error.message}`]);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-sky-400">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-sky-500/10 rounded-lg">
                  <Mail className="w-5 h-5 text-sky-400" />
                </div>
                <span>himanshukhobragade2005@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-sky-500/10 rounded-lg">
                  <Phone className="w-5 h-5 text-sky-400" />
                </div>
                <span>+91 9420619311</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-sky-500/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-sky-400" />
                </div>
                <span>Gittikhadan Area, Nagpur</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {errors.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-2 text-red-400 bg-red-500/10 p-3 rounded-lg"
                >
                  {errors.map((error, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  ))}
                </motion.div>
              )}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-sky-500 text-white placeholder-slate-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-sky-500 text-white placeholder-slate-400"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-sky-500 text-white placeholder-slate-400 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 bg-green-500/10 p-3 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully!</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

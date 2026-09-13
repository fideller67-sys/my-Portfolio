import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    const formData = new FormData(event.target);

    formData.append("access_key", "f39f502f-2c5d-4159-b3a7-2af254fdeb8a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Message sent successfully! I will get back to you soon.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setStatus("error");
        setResult(data.message);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setResult("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen pt-32 px-6 md:px-12 max-w-7xl mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get in <span className="gradient-text">Touch</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="glass-panel p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-primary/20 p-4 rounded-xl text-primary">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Email</h3>
              <p className="text-gray-400">nwankwofidel7@gmail.com</p>
            </div>
          </div>
          
          <div className="glass-panel p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-secondary/20 p-4 rounded-xl text-secondary">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Location</h3>
              <p className="text-gray-400">Lagos, Nigeria(Remote)</p>
            </div>
          </div>
          
          <div className="glass-panel p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-purple-500/20 p-4 rounded-xl text-purple-400">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Phone</h3>
              <p className="text-gray-400">+2348105997861</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-panel p-8 rounded-2xl relative overflow-hidden"
        >
          <form className="space-y-6" onSubmit={onSubmit}>
            {/* Subject field to let Web3Forms know the email subject */}
            <input type="hidden" name="subject" value="New Contact from Portfolio Website" />
            <input type="hidden" name="from_name" value="Portfolio Contact Form" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-300 ml-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-300 ml-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-300 ml-1">Message</label>
              <textarea 
                rows={5}
                name="message"
                required
                placeholder="Tell me about your project..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === "submitting"}
              className="w-full bg-primary hover:bg-blue-600 disabled:bg-primary/50 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              {status === "submitting" ? 'Sending...' : 'Send Message'} <Send size={20} />
            </button>

            {/* Form Result Messages */}
            {status === 'success' && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-3 text-green-200">
                <CheckCircle2 size={20} className="text-green-400" />
                <p>{result}</p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl flex items-center gap-3 text-red-200">
                <AlertCircle size={20} className="text-red-400" />
                <p>{result}</p>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

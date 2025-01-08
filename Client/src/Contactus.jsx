import React, { useState } from 'react';
import Navbar from './homepage/Navbar';
import axios from 'axios';
import Footer from './homepage/Footer';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/contact', {
        email,
        subject,
        message,
      });
      
      if (response.data.success) {
        alert('Message sent successfully!');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending your message.');
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-black">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
          <div className='animate__animated animate__bounceInDown'>
          <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-center text-white">
            Contact Us
          </h2>
          <p className="mb-6 font-light text-center text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback? Need details about our business? Let us know.
          </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className='animate__animated animate__bounceInLeft'>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300">
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 text-sm rounded-lg bg-gray-700 text-white border border-gray-600"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className='animate__animated animate__bounceInRight'>
              <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-2 text-sm rounded-lg bg-gray-700 text-white border border-gray-600"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className='animate__animated animate__bounceInUp'>
              <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-300">
                Your message
              </label>
              <textarea
                id="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 text-sm rounded-lg bg-gray-700 text-white border border-gray-600"
                placeholder="Leave a comment..."
                required
              />
            </div>
            <div className="flex justify-center animate__animated animate__bounceInUp">
              <button type="submit" className="bg-gray-800 px-6 py-2 rounded-lg text-white hover:bg-gray-700 transition duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ContactUs;

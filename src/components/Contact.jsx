import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    // Encode text for WhatsApp link
    const whatsappMessage = `Hello, I would like to contact you. Email: ${email} Message: ${message}`;

    // Redirect to WhatsApp chat
    window.open(`https://wa.me/8238292976?text=${whatsappMessage}`, "_blank");

    // Reset fields
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact" className="max-w-6xl mx-auto sm:px-4 px-2 py-6 font-bricolage">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-4 font-serif">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Looking for more details about our products or services? Contact us easily via phone, email, or WhatsApp. 
        Our team is ready to respond quickly to your queries.
      </p>

      {/* Main Container */}
      <div className="bg-gray-100 rounded-3xl p-2 sm:p-10 flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left Side - Contact Details */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Contact Details:</h3>

          <p className="mb-2">
            <span className="font-semibold">Email: </span>
            bhaveshsupermarket.2018@gmail.com
          </p>
          <p className="mb-2">
            <span className="font-semibold">Phone: </span>
            +91 9879284612
          </p>
          <p className="mb-4">
            <span className="font-semibold">Address: </span>
            Bhavesh Super Market, Anant Nagar, Morbi, Gujarat 363641
          </p>

          {/* Social Icons with Links */}
          <div className="flex items-center gap-4 text-xl text-gray-700 mb-6">
            <a
              href="https://www.facebook.com/share/15t1hB2uWk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/bhavesh_super_market/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/9879284612"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.youtube.com/@bhavesh_super_market5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaYoutube />
            </a>
          </div>

          <p className="text-gray-600 text-sm sm:mt-32">
            We typically respond within 6 hours.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 bg-orange-100 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
          <form className="space-y-4" onSubmit={handleSend}>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows="2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2 text-sm resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 bg-black text-white px-6 py-2 rounded-lg w-full md:w-auto"
            >
              SEND VIA WHATSAPP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

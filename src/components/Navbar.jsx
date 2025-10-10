import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import banner from "../assets/hero.png";
import insta from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import WhatsApp from "../assets/whatssapp.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div id="home" className="relative w-full">
      {/* Navbar */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] bg-white rounded-full shadow-md flex items-center justify-between px-6 py-3 z-30">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 sm:h-14 w-full" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-1 justify-center space-x-10 text-gray-800 font-medium text-lg mr-24">
          <li><a href="#home" className="hover:text-red-500">Home</a></li>
          <li><a href="#about" className="hover:text-red-500">About</a></li>
          <li><a href="#product" className="hover:text-red-500">Product</a></li>
          <li><a href="#review" className="hover:text-red-500">Review</a></li>
          <li><a href="#payment" className="hover:text-red-500">Payment</a></li>
          <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
          <li><a href="#location" className="hover:text-red-500">Location</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative z-50">
          <button onClick={() => setOpen(!open)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/10 z-40 flex justify-center items-start pt-20">
          <div ref={menuRef} className="w-[80%] bg-white rounded-xl shadow-lg p-6">
            <ul className="flex flex-col space-y-4 text-gray-800 font-medium text-lg text-center">
              {["Home", "About", "Product", "Review", "Payment", "Contact", "Location"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="block hover:text-red-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div
        className="w-full h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-abril drop-shadow-md mt-8">
            Bhavesh Super Market
          </h1>
           {/* Social Icons */}
          <div className="flex space-x-6 mt-12">
            <a
              href="https://www.instagram.com/bhavesh_super_market/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={insta}
                alt="Instagram"
                className="sm:h-16 sm:w-16 h-10 w-10 hover:scale-110 transition"
              />
            </a>
            <a
              href="https://www.facebook.com/share/15t1hB2uWk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="sm:h-16 sm:w-16 h-10 w-10 hover:scale-110 transition"
              />
            </a>
            {/* <a
              href="https://www.instagram.com/bhavesh_super_market/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={insta}
                alt="Instagram"
                className="sm:h-16 sm:w-16 h-10 w-10 hover:scale-110 transition"
              />
            </a>
            <a
              href="https://www.facebook.com/share/15t1hB2uWk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="sm:h-16 sm:w-16 h-10 w-10 hover:scale-110 transition"
              />
            </a> */}
          </div>

          {/* ✨ Taglines */}
          <p className="mt-16 text-lg md:text-2xl font-bricolage font-medium text-white/90 drop-shadow-sm">
            One Stop Destination for Everything You Need.
          </p>
          <p className="mt-8 text-base md:text-xl font-poppins text-white/80 font-bricolage">
            Quality • Trust • Variety — All Under One Shop.
          </p>

         
        </div>

        {/* WhatsApp Floating Button */}
        <div className="fixed sm:bottom-12 sm:right-12 bottom-8 right-2 z-[100]">
          <a
            href="https://wa.me/9879284612"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:scale-110 transition-transform duration-300"
          >
            <img
              src={WhatsApp}
              alt="WhatsApp"
              className="h-12 w-12 sm:h-20 sm:w-20"
            />
          </a>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    </div>
  );
};

export default Navbar;

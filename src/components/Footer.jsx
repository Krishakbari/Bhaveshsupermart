import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        
        {/* Opening Hours */}
        <div>
          <h3 className="font-bold text-lg mb-2">Opening Hours</h3>
          <p className="text-gray-300">Monday - Saturday</p>
          <p className="text-gray-500">9:30AM - 9:00PM</p>
          <p className="text-gray-300">Sunday</p>
          <p className="text-gray-500">9:30AM - 1:30PM</p>
          <p className="text-gray-500">4:30PM - 8:00PM</p>
        </div>

        {/* Speciality Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">Our Speciality</h3>
          <p className="text-gray-300">
            Welcome to <span className="font-semibold text-white">Bhavesh Super Mart</span>,  
            your one-stop destination for fresh groceries, quality products,  
            and amazing offers every day.
          </p>
        </div>

        {/* Our Address */}
        <div>
          <h3 className="font-bold text-lg mb-2">Our Address</h3>
          <p className="text-gray-300">Bhavesh Super Market, Gujarat 363641</p>
          <p className="text-gray-300">Anant Nagar, Morbi</p>
          <p className="text-gray-300">Gujarat - 363641</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6">
        <div className="flex flex-col items-center space-y-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center">
            © Copyright Bhavesh Super Mart 2025. Built by{" "}
            <a
              href="https://godhanitechnology.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              Godhani Technology
            </a>
          </p>

          {/* Logo */}
          <img src={logo} alt="Logo" className="h-10 object-contain" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

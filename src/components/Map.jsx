import React from "react";

const Map = () => {
  return (
    <div
      id="location"
      className="w-full p-4 sm:px-48 sm:py-10 flex flex-col items-center text-center"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-gray-800 mb-6">
        Our Location
      </h2>
       <p className="text-gray-600 max-w-2xl mx-auto mb-4">
        For your convenience, here’s our exact location. You can easily find us and visit directly using the map below
        </p>

      {/* Google Map */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d452862.83004243876!2d70.78480829671635!3d22.746156145815764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598d8057e43609%3A0x2e2c9c70ee90eda1!2sBhavesh%20super%20market!5e1!3m2!1sen!2sin!4v1759396436466!5m2!1sen!2sin" 
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl shadow-md"
      ></iframe>
    </div>
  );
};

export default Map;

import React from "react";
import Country1 from "../assets/C1.png";
import Country2 from "../assets/C2.png";
import Country3 from "../assets/C3.png";
import Country4 from "../assets/C4.png";
import Country5 from "../assets/C5.png";

const Country = () => {
  return (
    <div className="bg-[#2f333a] text-center py-12 sm:px-20 px-4 rounded-2xl mx-4 md:mx-48 sm:mt-10 mb-4">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-2">
        Delivering Across Multiple Countries
      </h2>
      <p className="text-gray-300 mb-8">
        Your order, <span className="text-yellow-400 font-medium">delivered</span> anywhere
      </p>

      {/* Flags */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
        <img
          src={Country1}
          alt="USA"
          className="w-28 sm:w-32 md:w-36 h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src={Country2}
          alt="South Africa"
          className="w-28 sm:w-32 md:w-36 h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src={Country3}
          alt="Uganda"
          className="w-28 sm:w-32 md:w-36 h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src={Country4}
          alt="Nigeria"
          className="w-28 sm:w-32 md:w-36 h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src={Country5}
          alt="Kenya"
          className="w-28 sm:w-32 md:w-36 h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300 col-span-2 sm:col-span-3 md:col-span-1 justify-self-center"
        />
      </div>
    </div>
  );
};

export default Country;

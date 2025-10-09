import React from "react";
import founder1 from "../assets/MD.png";
import founder2 from "../assets/founder2.png";
import leftimg from "../assets/aboutleft.png";

const About = () => {
  return (
    <div
      id="about"
      className="h-full relative sm:py-12 py-6 px-2 md:px-20 text-center"
    >
      {/* Left Decoration Image */}
      <img
        src={leftimg}
        alt="Left Decoration"
        className="absolute sm:left-0 sm:top-1/2 left-0 top-[550px] -translate-y-1/2 w-24 sm:w-40 md:w-56 lg:w-64 z-0"
      />

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-4 font-serif z-10 relative">
        About Us
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto sm:mb-10 mb-6 z-10 relative text-sm">
        We are the proud founders of Bhavesh Super Mart, dedicated to bringing
        you quality products at the best prices. Our goal is to serve the
        community with trust, variety, and excellence.
      </p>

      {/* Team Members */}
      <div className="flex flex-col gap-10 z-10 relative lg:flex-row lg:items-center lg:justify-around mt-8 ">
        {/* Member 1 */}
        <div className="flex flex-row w-full lg:w-auto lg:items-center">
          {/* Image */}
          <div className="w-1/2 flex justify-center items-center lg:w-auto">
            <img
              src={founder1}
              alt="Mehul S Sanghavi"
              className="w-30 h-60 sm:w-64 sm:h-72 object-cover rounded-xl border-4 shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="w-1/2 flex flex-col justify-center text-left pl-2 sm:pl-8 lg:w-60">
            <h3 className="font-bold text-md sm:text-2xl">Mehul S Sanghavi</h3>
            <p className="text-gray-500 text-sm font-medium sm:text-lg">
              Managing Director
            </p>
            <p className="italic text-gray-600 text-sm mt-2 sm:font-medium">
              “Fueled by vision, grounded in values. These minds don’t just
              follow trends, they set them. Every move is calculated, every risk
              is refined.”
            </p>
          </div>
        </div>

        {/* Member 2 */}
        <div className="flex flex-row w-full lg:w-auto lg:items-center">
          {/* Image */}
          <div className="w-1/2 flex justify-center items-center lg:w-auto">
            <img
              src={founder2}
              alt="Vansh M Sanghavi"
              className="w-30 h-60 sm:w-64 sm:h-72 object-cover rounded-xl border-4 shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="w-1/2 flex flex-col justify-center text-left pl-2 sm:pl-8  lg:w-60">
            <h3 className="font-bold text-md sm:text-2xl">Vansh M Sanghavi</h3>
            <p className="text-gray-500 text-sm font-medium sm:text-lg">
              Managing Director
            </p>
            <p className="italic text-gray-600 text-sm mt-2 sm:font-medium">
              “When passion meets precision, magic happens. Leaders blend vision
              with action. They sculpt businesses into empires and challenges
              into victories.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

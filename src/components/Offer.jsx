import React from "react";
import hero from "../assets/hero.png";
import offer1pic from "../assets/offer1.png";
import offer2pic from "../assets/offer2.png";
import offer3pic from "../assets/offer3.png";
import offer4pic from "../assets/offer4.png";

const Offer = () => {
  const offers = [offer1pic, offer2pic, offer3pic, offer4pic];

  return (
    <div
      className="relative sm:h-[600px] h-[400px] w-full bg-fixed bg-cover bg-center px-4 sm:px-12"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Dark overlay on hero */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Content vertically centered */}
      <div className="relative z-10 h-full flex items-center justify-center overflow-y-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              // This parent div correctly creates the rounded frame
              className="rounded-2xl overflow-hidden flex items-center justify-center"
            >
              <img
                src={offer}
                alt={`Offer ${index + 1}`}
                // CHANGE: Changed object-contain to object-cover
                // This makes the image fill the parent div completely.
                // I also removed the redundant rounded-2xl from the image itself.
                className="w-full h-40 sm:h-60 md:h-80 object-cover hover:scale-105 transition-transform duration-300 opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
import React from "react";
import profile1 from "../assets/w3.jpg";
import profile2 from "../assets/w9.avif";
import profile3 from "../assets/w6.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      img: profile1,
      name: "Priyanka Desai",
      location: "Morbi",
      text: `"I recently visited their supermart shop and was impressed with the wide variety. From daily groceries to trendy fashion wear, everything was available at reasonable prices. The staff was polite and helpful."`,
    },
    {
      img: profile2,
      name: "Shreya Patel",
      location: "Jetpur",
      text: `"The shop is well-organized and has almost everything under one roof. I bought kitchen essentials and some snacks, and the quality was really good. Definitely my go-to place for shopping."`,
    },
    {
      img: profile3,
      name: "Anjali Mehta",
      location: "Morbi",
      text: `"I purchased skincare items and some stationery from their store. The collection was amazing, prices were fair, and I liked how neatly everything was arranged. A reliable shop for families."`,
    },
  ];

  return (
    <section id="review" className="w-full pb-6 pt-6 px-6 md:px-12 lg:px-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Our Testimonial</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
         Every happy customer inspires us to serve better. From groceries to fashion, here are some genuine experiences shared by shoppers who visited our store
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-4">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-xl p-6 shadow-lg"
          >
            {/* Profile */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-yellow-500 text-sm">{item.location}</p>
              </div>
            </div>

            <hr className="border-gray-600 mb-4" />

            {/* Testimonial Text */}
            <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;

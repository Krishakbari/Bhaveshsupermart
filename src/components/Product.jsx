import React from "react";
import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import Product4 from "../assets/product4.png";
import Product5 from "../assets/product5.png";
import Product6 from "../assets/product6.png";
import Product7 from "../assets/product7.png";
import Product8 from "../assets/product8.png";
import Product9 from "../assets/product9.png";
import Product10 from "../assets/product10.png";
import Product11 from "../assets/product11.png";
import Product12 from "../assets/product12.png";
import Product13 from "../assets/product13.png";
import Product14 from "../assets/product14.png";
import Product15 from "../assets/product15.png";
import Product16 from "../assets/product16.png";
import Product17 from "../assets/product17.png";
import Product18 from "../assets/product18.png";
import Product19 from "../assets/product19.png";
import Product20 from "../assets/product20.png";

const products = [
  { id: 1, name: "Men’s nightwear & Jockey Undergarments", img: Product1 },
  { id: 2, name: "Women’s nightwear & Undergarments", img: Product2 },
  { id: 3, name: "Kid’s nightwear & Jockey Undergarments", img: Product3 },
  { id: 4, name: "Stationery & Office Supplies", img: Product4 },
  { id: 5, name: "Skin & Hair Care", img: Product5 },
  { id: 6, name: "Home Care & Laundry Essentials", img: Product6 },
  { id: 7, name: "Kitchen & Household (Milton Range)", img: Product7 },
  { id: 8, name: "Crockery & Tableware", img: Product8 },
  { id: 9, name: "Snacks & Namkeens", img: Product9 },
  { id: 10, name: "Chocolates & Confectionery", img: Product10 },
  { id: 11, name: "Beverages & Refreshments", img: Product11 },
  { id: 12, name: "Toys & Games", img: Product12 },
  { id: 13, name: "Electronics & Gadgets", img: Product13 },
  { id: 14, name: "Pooja Essentials (Incense, Diyas & More)", img: Product14 },
  { id: 15, name: "Fragrances & Perfumes", img: Product15 },
  { id: 16, name: "Bags & Luggage", img: Product16 },
  { id: 17, name: "Spices & Masalas", img: Product17 },
  { id: 18, name: "Dry Fruits & Nuts", img: Product18 },
  { id: 19, name: "Instant Mixes & Ready-to-Cook", img: Product19 },
  { id: 20, name: "Health & Wellness", img: Product20 },
];

const Product = () => {
  return (
    <div id="product" className="max-w-7xl mx-auto px-0 sm:py-10 py-6">
      <h2 className="text-3xl font-bold text-center sm:mb-6 pb-2   font-serif">
        Our Products
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto sm:mb-8 mb-8 text-sm sm:text-base">
        From everyday essentials to premium lifestyle products, our store brings you
        everything under one roof. Explore fashion, home care, groceries, and more
        with trusted quality and affordable pricing.
      </p>

      {/* ✅ Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl overflow-hidden group transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden flex justify-center items-center ">
              <img
                src={product.img}
                alt={product.name}
                className="w-full px-4 sm:w-[90%] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Text & Button */}
            <div className="sm:p-4  flex flex-col items-center text-center bg-transparent">
              <h3 className="text-md sm:text-base font-medium text-gray-700 sm:mb-3 mb-1">
                {product.name}
              </h3>
              <a
                href={`https://wa.me/9879284612?text=Hello, I want to inquire about ${product.name} items.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md bg-black text-white px-5 py-2  sm:text-sm rounded-md hover:bg-gray-800 transition"
              >
                Inquiry Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

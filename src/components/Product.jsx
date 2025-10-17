import React from "react";
import Product1 from "../assets/product1.png";
import Product4 from "../assets/product4.png";
import Product9 from "../assets/product9.png";
import Product170 from "../assets/product170.png";
import Product12 from "../assets/product12.png";

import Product22 from "../assets/product22.png";
import Product23 from "../assets/product23.png";
import Product24 from "../assets/product24.png";
import Product25 from "../assets/product25.png";
import Product26 from "../assets/product26.png";
import Product27 from "../assets/product27.png";
import Product28 from "../assets/product28.png";
import Product29 from "../assets/product29.png";
import Product30 from "../assets/product30.png";
import Product31 from "../assets/product31.png";
import Product32 from "../assets/product32.png";
import Product33 from "../assets/product33.png";
import Product34 from "../assets/product34.png";
import Product35 from "../assets/product35.png";
import Product36 from "../assets/product36.png";
import Product37 from "../assets/product37.png";
import Product38 from "../assets/product38.png";
import Product39 from "../assets/product39.png";
import Product40 from "../assets/product40.png";
import Product41 from "../assets/product41.png";
import Product42 from "../assets/product42.png";
import Product43 from "../assets/product43.png";
import Product44 from "../assets/product44.png";
import Product45 from "../assets/product45.png";
import Product46 from "../assets/product46.png";
import Product47 from "../assets/product47.png";
import Product48 from "../assets/product48.png";
import Product49 from "../assets/product49.png";
import Product50 from "../assets/product50.png";
import Product51 from "../assets/product51.png";
import Product52 from "../assets/product52.png";
import Product53 from "../assets/product53.png";
import Product54 from "../assets/product54.png";
import Product55 from "../assets/product55.png";
import Product56 from "../assets/product56.png";
import Product57 from "../assets/product57.png";
import Product58 from "../assets/product58.png";
import Product59 from "../assets/product59.png";
import Product60 from "../assets/product60.png";
import Product61 from "../assets/product61.png";
import Product62 from "../assets/product62.png";
import Product63 from "../assets/product63.png";

const products = [
  { id: 1, name: "Men’s nightwear & Undergarments", img: Product1 },
  { id: 2, name: "Watches-titan,sonata,fasttrack", img: Product170 },
  { id: 4, name: "Women’s Bra & Undergarments", img: Product22 },
  { id: 5, name: "Women’s Nightwear & Purse", img: Product23 },
  { id: 6, name: "Milton range products", img: Product24 },
  { id: 7, name: "Sope & Bodywash", img: Product25 },
  { id: 8, name: "Cleaning Items-Harpic & more", img: Product26 },
  { id: 9, name: "Treo-Glassware & Jar", img: Product27 },
  { id: 10, name: "Stationary & office supplies", img: Product4 },
  { id: 11, name: "Launchbox-schoolbags-compass", img: Product28 },
  { id: 12, name: "Washing powders & liquids", img: Product30 },
  { id: 13, name: "Groceries & more", img: Product29 },
  { id: 14, name: "Namkeens", img: Product9 },
  { id: 15, name: "Britannia Products & Dry bhakhri ", img: Product31 },
  { id: 16, name: "Coldrinks ", img: Product32 },
  { id: 17, name: "Chocolates ", img: Product33 },
  { id: 18, name: "Toys ", img: Product12 },
  { id: 19, name: "Kids nightwear & Undergarments", img: Product34 },
  { id: 21, name: "Philips Iron-Trimmer-dryer", img: Product38 },
  { id: 22, name: "Mummy poco - Pempers diapers", img: Product37 },
  { id: 23, name: "McCain", img: Product35 },
  { id: 24, name: "Stayfree & Whispers", img: Product39 },
  { id: 25, name: "Phenyl products", img: Product40 },
  { id: 26, name: "Cycle & Zedblack agarbatti", img: Product42 },
  { id: 27, name: "Mamaearth Items", img: Product41 },
  { id: 28, name: "Hair colors", img: Product43 },
  { id: 29, name: "Toothpaste", img: Product44 },
  { id: 30, name: "Detergent soaps ", img: Product45 },
  { id: 31, name: "Perfumes & Body sprays", img: Product46 },
  { id: 32, name: "Office-Trolly-School bags", img: Product47 },
  { id: 33, name: "Handwash", img: Product48 },
  { id: 34, name: "Facewash", img: Product49 },
  { id: 35, name: "Loreal Professional", img: Product50 },
  { id: 36, name: "Matrix Professional", img: Product51 },
  { id: 37, name: "Beauty Products", img: Product52 },
  { id: 38, name: "Amul Products", img: Product53 },
  { id: 39, name: "Sharbat & Fruit juice", img: Product54 },
  { id: 40, name: "Everest Masala", img: Product55 },
  { id: 41, name: "bournvita Horlicks Coplain ", img: Product56 },
  { id: 42, name: "Keychains", img: Product57 },
  { id: 43, name: "Dryfruits", img: Product58 },
  { id: 44, name: "Tooth brushes", img: Product59 },
  { id: 45, name: "Green tea", img: Product60 },
  { id: 46, name: "Instant Mix foods", img: Product61 },
  { id: 47, name: "Shampoo", img: Product62 },
  { id: 48, name: "Gala - Milton Mop", img: Product63 },
  { id: 20, name: "Wipers & Air blowers", img: Product36 },

];

const Product = () => {
  return (
    <div id="product" className="max-w-7xl mx-auto px-0 sm:py-10 py-6">
      <h2 className="text-3xl font-bold text-center sm:mb-6 pb-2 font-serif">
        Our Products
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto sm:mb-8 mb-8 text-sm sm:text-base">
        From everyday essentials to premium lifestyle products, our store brings you
        everything under one roof. Explore fashion, home care, groceries, and more
        with trusted quality and affordable pricing.
      </p>

      {/* ✅ Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-10 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl overflow-hidden group transition-all duration-300 sm:mt-8 mt-6"
          >
            {/* Image */}
            <div className="overflow-hidden flex justify-center items-center">
              <img
                src={product.img}
                alt={product.name}
                className="w-full px-4 sm:w-[90%] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Text & Button */}
            <div className="sm:p-4 flex flex-col items-center text-center bg-transparent">
              <h3 className="text-md sm:text-base font-medium text-gray-700 sm:mb-3 mb-1">
                {product.name}
              </h3>
              <a
                href={`https://wa.me/9879284612?text=Hello, I want to inquire about ${product.name} items.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md bg-black text-white px-5 py-2 sm:text-sm rounded-md hover:bg-gray-800 transition"
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

import React from "react";
import QRimg from "../assets/QR.png";

const Payment = () => {
  return (
    <div id="payment" className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-4 font-serif">
        Payment Details
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto sm:mb-10 mb-4">
        Pay securely through our trusted payment channels. Use the provided bank details or simply scan the QR code for faster transactions and confirmation
      </p>

      {/* Card Container */}
      <div className="bg-gray-200 rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-stretch gap-6">
        {/* Left Side - Account Info */}
        <div className="flex-1 w-full space-y-3">
          <div className="bg-gray-100 p-3 rounded-md text-gray-700 text-sm">
            <span className="font-semibold">Account Name:</span> BHAVESH SUPER MARKET
          </div>
          <div className="bg-gray-100 p-3 rounded-md text-gray-700 text-sm">
            <span className="font-semibold">Account Number:</span> 387001010036551
          </div>
          <div className="bg-gray-100 p-3 rounded-md text-gray-700 text-sm">
            <span className="font-semibold">Bank Name:</span> Union Bank of India
          </div>
          <div className="bg-gray-100 p-3 rounded-md text-gray-700 text-sm">
            <span className="font-semibold">Branch:</span> Morbi, Gujarat
          </div>
          <div className="bg-gray-100 p-3 rounded-md text-gray-700 text-sm">
            <span className="font-semibold">IFSC Code:</span> UBIN0538701
          </div>
        </div>

        {/* Divider (only for desktop) */}
        <div className="hidden md:block w-px bg-gray-400"></div>

        {/* Right Side - QR */}
        <div className="flex justify-center items-center flex-1">
          <img
            src={QRimg}
            alt="QR Code"
            className="w-48 h-48 md:w-64 md:h-64 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;




















// import React from "react";
// import QRimg from "../assets/QR.png";

// const Payment = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       {/* Heading */}
//       <h2 className="text-3xl font-bold text-center mb-4 font-serif">
//         Payment Details
//       </h2>
//       <p className="text-center text-gray-600 max-w-2xl mx-auto sm:mb-10 mb-4">
//         Aliquet egestas gravida orci orci nulla lacus suspendisse. Vel
//         ullamcorper ultrices volutpat enim dignissim id purus. Urna quam massa
//         urna dolor enim dui lectus id….
//       </p>

//       {/* Card Container */}
//       <div className="bg-gray-200 rounded-2xl p-6 sm:p-16 flex flex-col md:flex-row items-center md:items-stretch gap-6">
//         {/* Left Side - Account Info */}
//         <div className="flex-1 w-full space-y-3">
//           <div className="bg-gray-100 p-3 rounded-md text-gray-700 text-sm">
//             <span className="font-semibold">Account Name:</span> Your Name
//           </div>
//           <div className="bg-gray-100 p-3 rounded-md text-gray-700 text-sm">
//             <span className="font-semibold">Account Number:</span> 1234567890
//           </div>
//           <div className="bg-gray-100 p-3 rounded-md text-gray-700 text-sm">
//             <span className="font-semibold">Bank Name:</span> ABC Bank
//           </div>
//           <div className="bg-gray-100 p-3 rounded-md text-gray-700 text-sm">
//             <span className="font-semibold">Branch:</span> XYZ Branch
//           </div>
//           <div className="bg-gray-100 p-3 rounded-md text-gray-700 text-sm">
//             <span className="font-semibold">IFSC Code:</span> ABCD0123456
//           </div>
//         </div>

//         {/* Divider (only for desktop) */}
//         <div className="hidden md:block w-px bg-gray-400"></div>

//         {/* Right Side - QR */}
//         <div className="flex justify-center items-center flex-1">
//           <img
//             src={QRimg}
//             alt="QR Code"
//             className="w-40 h-40 md:w-72 md:h-72 object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;

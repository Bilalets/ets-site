// PaymentModal.tsx
"use client";
import Image from 'next/image';
import React from 'react';

interface PaymentModalProps {
  showModal: boolean;
  theme: string;
  closeModal: () => void;
  handleUploadPaymentSlip: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ showModal, theme, closeModal, handleUploadPaymentSlip }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
    <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg w-full md:max-w-screen-md max-h-full md:max-h-screen overflow-y-auto">
      <h2 className={`text-3xl font-bold mb-6 text-center ${theme === "dark" ? "text-white" : "text-blue-600"}`}>Payment Details</h2>
      <div className="flex justify-center mb-4">
        <p className="text-lg font-semibold">Scan QR code for payment</p>
      </div>
      <div className="flex justify-center mb-4">
        <Image src="/images/QRcode/ets.jpg" alt="Payment Instructions"  width={340} height={340}/>
        <Image src="/images/QRcode/ets2.jpg" alt="Another Image"   width={300} height={300}/>
      </div>
      <div className="flex justify-center mb-4">
        <input 
          type="file" 
          id="payment-receipt" 
          className={`bg-transparent border ${theme === "dark" ? "border-white text-white" : "border-gray-300 text-black"
            } text-sm rounded-lg block w-full p-3 ${theme === "dark" ? "placeholder-white" : "placeholder-gray-500"}`}
          style={{ color: theme === "dark" ? "white" : "black" }}
        />
      </div>
      <div className="flex justify-center gap-4">
        <button
          type="button"
          className={`text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3 text-center ${
            theme === "dark" ? "border border-transparent" : "border border-gray-300"
          }`}
          onClick={closeModal}
        >
          Close
        </button>
        <button
          type="button"
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center ${
            theme === "dark" ? "border border-transparent" : "border border-gray-300"
          }`}
          onClick={handleUploadPaymentSlip}
        >
          Upload
        </button>
      </div>
    </div>
  </div>
  );
};

export default PaymentModal;

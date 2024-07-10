// PaymentModal.tsx
"use client";
import Image from 'next/image';
import React, { useRef } from 'react';
import { HiClipboardCopy } from 'react-icons/hi';
import { CldUploadWidget } from 'next-cloudinary';
interface PaymentModalProps {
  showModal: boolean;
  theme: string;
  closeModal: () => void;
  handleUploadPaymentSlip: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ showModal, theme, closeModal, handleUploadPaymentSlip }) => {
  const paymentTextRef = useRef<HTMLInputElement>(null);

  if (!showModal) {
    return null;
  }

  const handleCopyText = () => {
    if (paymentTextRef.current) {
      paymentTextRef.current.select();
      document.execCommand('copy');
    }
  };
  const handleUploadSuccess = (result) => {
    const imageUrl = result.info.secure_url; // Get the secure URL of the uploaded image
    // Now you can save `imageUrl` in MongoDB or perform further actions
   
    // Add your MongoDB saving logic here
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg w-full md:max-w-screen-md max-h-full md:max-h-screen overflow-y-auto">
      <div className="relative border border-gray-300 rounded-lg">
            <input 
              ref={paymentTextRef}
              type="text"
              value="PK07FAYS3296787000001619"
              readOnly
              className={`bg-gray-100 dark:bg-gray-800 border-2 ${theme === "dark" ? "border-black text-white" : "border-black text-black"
                } text-sm rounded-lg pl-3 pr-10 ${theme === "dark" ? "placeholder-white" : "placeholder-gray-500"}`}
              style={{ color: theme === "dark" ? "white" : "black", height: '40px', width: '280px' }} // Increase height of input field
            />
            <HiClipboardCopy 
              className={`absolute right-2 top-2 text-gray-400 dark:text-gray-300 cursor-pointer`}
              onClick={handleCopyText}
            />
          </div>  <h2 className={`text-3xl font-bold mb-6 text-center ${theme === "dark" ? "text-white" : "text-blue-600"}`}>Payment Details</h2>
        <div className="flex justify-center mb-4 relative">
          
        </div>
        <div className="flex justify-center mb-4">
          <p className="text-lg font-semibold">Scan QR code for payment</p>
        </div>
        <div className="flex justify-center mb-4">
          <Image src="/images/QRcode/ets.jpg" alt="Payment Instructions"  width={280} height={280}/>
          <Image src="/images/QRcode/ets2.jpg" alt="Another Image"   width={290} height={290}/>
        </div>
        <div className="flex justify-center mb-4">
        <CldUploadWidget uploadPreset="test_upload" onSuccess={handleUploadSuccess}>
  {({ open }) => {
    return (
      <button   className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center ${
        theme === "dark" ? "border border-transparent" : "border border-gray-300"
      }`} onClick={() => open()}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>
        </div>
        <div className=" flex justify-end gap-4">
          <button
            type="button"
            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center ${
              theme === "dark" ? "border border-transparent" : "border border-gray-300"
            }`}
            onClick={handleUploadPaymentSlip}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
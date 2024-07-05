import React, { useState, useEffect } from "react";
import cities, { City } from "./cities"; // Ensure this path is correct
import { useTheme } from "next-themes";
import Image from "next/image"; // Import Image component from Next.js

import { CldUploadWidget } from 'next-cloudinary';
import axios from "axios";
import toast from "react-hot-toast";
interface ApplicationFormProps {
  isVisible: boolean;
  onClose: () => void;
}

const provinces: string[] = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Gilgit-Baltistan",
  "Azad Jammu and Kashmir",
  "Islamabad Capital Territory",
];

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  isVisible,
  onClose,
}) => {
  const [gender, setGender] = useState<string>();
  const [Name,setName]=useState<string>()
  const [FatherName,SetFatherName]=useState<string>()
  const [province, setProvince] = useState<string>();
  const [city, setCity] = useState<string>();
  const [cnic, setCnic] = useState<string>();
  const [mobile, setMobile] = useState<string>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ cnic?: string; mobile?: string }>({});
  const [picImage,setImage]=useState<string>()
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [email,setEmail]=useState<string>()
  const [date,setDate]=useState<string>()
  const [addqualification,setqualification]=useState<string>()
 

  const sendform = async () => {
    try {
      const formattedDate = new Date(date).toISOString();
      await axios.post('/api/usersapplications', {
        Name: Name,
        FatherName: FatherName,
        CNIC: cnic,
        MobileNumber: mobile,
        Email: email,
        DateOfBirth: formattedDate,
        Gender: gender,
        Qualification: addqualification,
        Province: province,
        City: city,
        Imageurl: picImage
      });
      
      onClose();
      toast.success('Application Successfully Submitted') // Close modal upon successful submission
    } catch (error) {
      // Handle error if needed
    toast.error('Error Submiting Application')
    }
  };
  
const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setDate(event.target.value);
};

const handlequalification =(e: React.ChangeEvent<HTMLSelectElement>)=>{
    setqualification(e.target.value)
}

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
    // Reset city when province changes
    setCity("");
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  const handleCnicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^[0-9]{0,13}$/; // Only allow up to 13 digits
    if (regex.test(value)) {
      setCnic(value);
    }
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^[0-9]{0,11}$/; // Only allow up to 11 digits
    if (regex.test(value)) {
      setMobile(value);
    }
  };

  const validateForm = () => {
    const newErrors: { cnic?: string; mobile?: string } = {};
    if (cnic.length !== 13) {
      newErrors.cnic = "CNIC must be 13 digits long";
    }
    if (mobile.length < 10 || mobile.length > 11) {
      newErrors.mobile = "Mobile number must be 10 to 11 digits long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
       
        onClose();
      }, 2000);
    }
  };

  // Filter cities based on selected province
  const filteredCities: City[] = province
    ? cities.filter((c) => c.province === province)
    : [];

  const handlePaynowClick = () => {
    if (gender && province && city && cnic && mobile) {
      setShowModal(true);
    } else {
      alert("Please fill out all fields before proceeding to payment.");
    }
  };


  const handleUploadSuccess = (result) => {
    const imageUrl = result.info.secure_url; // Get the secure URL of the uploaded image
    setImage(imageUrl)
  };
  

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value); // Update the 'name' state with the input value
  };
  const handleFatherNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetFatherName(e.target.value); // Update the 'name' state with the input value
  };
  const fatherNameLabel = `Father&apos;s Name`;
  const fatherNamePlaceholder = `Enter your father&apos;s name`;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
      <div className="max-h-full w-full overflow-y-auto rounded-lg bg-white p-8 shadow-lg dark:bg-gray-700 md:max-h-screen md:max-w-screen-md">
        <h2
          className={`mb-6 text-center text-3xl font-bold ${
            theme === "dark" ? "text-white" : "text-blue-600"
          }`}
        >
          Application Form
        </h2>
    

            <div className="-mx-4 flex flex-wrap">
              <div className="mb-4 w-full px-4 md:w-1/2">
                <label
                  htmlFor="name"
                  className={`mb-2 block text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={handleNameChange}
                  className={`border bg-transparent ${
                    theme === "dark"
                      ? "border-white text-white"
                      : "border-gray-300 text-black"
                  } block w-full rounded-lg p-3 text-sm ${
                    theme === "dark"
                      ? "placeholder-white"
                      : "placeholder-gray-500"
                  }`}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4 w-full px-4 md:w-1/2">
                <label
                  htmlFor="fatherName"
                  className={`mb-2 block text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Father&apos;s Name
                </label>
                <input
                onChange={handleFatherNameChange}
                  type="text"
                  id="fatherName"
                  className={`border bg-transparent ${
                    theme === "dark"
                      ? "border-white text-white"
                      : "border-gray-300 text-black"
                  } block w-full rounded-lg p-3 text-sm ${
                    theme === "dark"
                      ? "placeholder-white"
                      : "placeholder-gray-500"
                  }`}
                  placeholder={fatherNamePlaceholder}
                  required
                />
              </div>
              <div className="mb-4 w-full px-4 md:w-1/2">
                <label
                  htmlFor="cnic"
                  className={`mb-2 block text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  CNIC
                </label>
                <input
                  type="number"
                  id="cnic"
                  className={`border bg-transparent ${
                    theme === "dark"
                      ? "border-white text-white"
                      : "border-gray-300 text-black"
                  } block w-full rounded-lg p-3 text-sm ${
                    theme === "dark"
                      ? "placeholder-white"
                      : "placeholder-gray-500"
                  }`}
                  placeholder="Enter your CNIC number"
                  value={cnic}
                  onChange={handleCnicChange}
                  required
                />
                {errors.cnic && (
                  <p className="text-sm text-red-500">{errors.cnic}</p>
                )}
              </div>
              <div className="mb-4 w-full px-4 md:w-1/2">
                <label
                  htmlFor="mobile"
                  className={`mb-2 block text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Mobile Number
                </label>
                <input
                  type="number"
                  id="mobile"
                  className={`border bg-transparent ${
                    theme === "dark"
                      ? "border-white text-white"
                      : "border-gray-300 text-black"
                  } block w-full rounded-lg p-3 text-sm ${
                    theme === "dark"
                      ? "placeholder-white"
                      : "placeholder-gray-500"
                  }`}
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={handleMobileChange}
                  required
                />
                {errors.mobile && (
                  <p className="text-sm text-red-500">{errors.mobile}</p>
                )}
              </div>
              <div className="mb-4 w-full px-4 md:w-1/2">
                <label
                  htmlFor="email"
                  className={`mb-2 block text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Email
                </label>
                <input
                onChange={(e)=>setEmail(e.target.value)}
                  type="email"
                  id="email"
                  className={`border bg-transparent ${
                    theme === "dark"
                      ? "border-white text-white"
                      : "border-gray-300 text-black"
                  } block w-full rounded-lg p-3 text-sm ${
                    theme === "dark"
                      ? "placeholder-white"
                      : "placeholder-gray-500"
                  }`}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="mb-4 w-full px-4 md:w-1/2">
                <label
                  htmlFor="dob"
                  className={`mb-2 block text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  onChange={handleDateChange}
                  id="dob"
                  className={`border bg-transparent ${
                    theme === "dark"
                      ? "border-white text-white"
                      : "border-gray-300 text-black"
                  } block w-full appearance-none rounded-lg p-3 text-sm`}
                  required
                />
              </div>

              <div className="relative mb-4 w-full px-4 md:w-1/2">
                <label
                  htmlFor="qualification"
                  className={`mb-2 block text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Qualification
                </label>
                <select
                onChange={handlequalification}
                  id="qualification"
                  className={`border bg-transparent ${
                    theme === "dark"
                      ? "border-white text-white"
                      : "border-gray-300 text-black"
                  } block w-full rounded-lg p-3 text-sm ${
                    theme === "dark"
                      ? "placeholder-white"
                      : "placeholder-gray-500"
                  }`}
                  style={{ color: theme === "dark" ? "white" : "black" }}
                  required
                >
                  <option
                    style={{
                      backgroundColor: theme === "dark" ? "#4B5563" : "white",
                      color: theme === "dark" ? "white" : "black",
                    }}
                    value=""
                  >
                    Select your qualification
                  </option>
                  <option
                    style={{
                      backgroundColor: theme === "dark" ? "#4B5563" : "white",
                      color: theme === "dark" ? "white" : "black",
                    }}
                    value="matric"
                  >
                    Matriculation
                  </option>
                  <option
                    style={{
                      backgroundColor: theme === "dark" ? "#4B5563" : "white",
                      color: theme === "dark" ? "white" : "black",
                    }}
                    value="intermediate"
                  >
                    Intermediate
                  </option>
                  <option
                    style={{
                      backgroundColor: theme === "dark" ? "#4B5563" : "white",
                      color: theme === "dark" ? "white" : "black",
                    }}
                    value="bachelors"
                  >
                    Bachelor&apos;s
                  </option>
                  <option
                    style={{
                      backgroundColor: theme === "dark" ? "#4B5563" : "white",
                      color: theme === "dark" ? "white" : "black",
                    }}
                    value="masters"
                  >
                    Master&apos;s
                  </option>

                  <option
                    style={{
                      backgroundColor: theme === "dark" ? "#4B5563" : "white",
                      color: theme === "dark" ? "white" : "black",
                    }}
                    value="phd"
                  >
                    PhD
                  </option>
                </select>
              </div>

              <div className="mb-4 w-full px-4 md:w-1/2">
                <label
                  htmlFor="gender"
                  className={`mb-2 block text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Gender
                </label>
                <select
                  id="gender"
                  className={`border bg-transparent ${
                    theme === "dark"
                      ? "border-white text-white"
                      : "border-gray-300 text-black"
                  } block w-full rounded-lg p-3 text-sm ${
                    theme === "dark"
                      ? "placeholder-white"
                      : "placeholder-gray-500"
                  }`}
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4 w-full px-4 md:w-1/2">
                <label
                  htmlFor="province"
                  className={`mb-2 block text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Province
                </label>
                <select
                  id="province"
                  className={`border bg-transparent ${
                    theme === "dark"
                      ? "border-white text-white"
                      : "border-gray-300 text-black"
                  } block w-full rounded-lg p-3 text-sm ${
                    theme === "dark"
                      ? "placeholder-white"
                      : "placeholder-gray-500"
                  }`}
                  value={province}
                  onChange={handleProvinceChange}
                  required
                >
                  <option value="">Select province</option>
                  {provinces.map((province, index) => (
                    <option key={index} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4 w-full px-4 md:w-1/2">
                <label
                  htmlFor="city"
                  className={`mb-2 block text-sm font-medium ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  City
                </label>
                <select
                  id="city"
                  className={`border bg-transparent ${
                    theme === "dark"
                      ? "border-white text-white"
                      : "border-gray-300 text-black"
                  } block w-full rounded-lg p-3 text-sm ${
                    theme === "dark"
                      ? "placeholder-white"
                      : "placeholder-gray-500"
                  }`}
                  value={city}
                  onChange={handleCityChange}
                  required
                >
                  <option value="">Select city</option>
                  {filteredCities.map((city, index) => (
                    <option key={index} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col items-center mb-4 relative">
  <div><p className="text-center">Faisal Bank IBN</p></div>

  <div className="relative border border-gray-300 rounded-lg">
    <input 
     
      type="text"
      value="PK07FAYS3296787000001619"
      readOnly
      className={`bg-gray-100 dark:bg-gray-800 border-2 ${theme === "dark" ? "border-black text-white" : "border-black text-black"
        } text-sm rounded-lg pl-3 pr-10 ${theme === "dark" ? "placeholder-white" : "placeholder-gray-500"}`}
      style={{ color: theme === "dark" ? "white" : "black", height: '40px', width: '280px' }} // Increase height of input field
    />
    
  </div>
</div>


            <div className="flex justify-center mb-4">
              <p className="text-lg font-semibold">
                Scan QR code for payment
              </p>
            </div>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/QRcode/ets.jpg"
                alt="Payment Instructions"
                width={280}
                height={280}
              />
              <Image
                src="/images/QRcode/ets2.jpg"
                alt="Another Image"
                width={290}
                height={290}
              />
            </div>
            <CldUploadWidget uploadPreset="test_upload" onSuccess={handleUploadSuccess}>
  {({ open }) => {
    return (
      <button   className={`text-white flex justify-center bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center ${
        theme === "dark" ? "border border-transparent" : "border border-gray-300"
      }`} onClick={() => open()}>
        Upload Payment Receipt
      </button>
    );
  }}
</CldUploadWidget>
{!picImage && (
        <p className="mt-2 text-red-500">Please upload an image.</p>
      )}
<div className="mt-4 flex flex-col gap-2 px-2 sm:flex-row sm:justify-start">
              <button
                type="button"
                className={`mb-2 rounded-lg bg-red-500 px-8 py-4 text-center text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 sm:mb-0 ${
                  theme === "dark"
                    ? "border border-transparent"
                    : "border border-gray-300"
                }`}
                onClick={onClose}
              >
                Close
              </button>
              
              <button
              onClick={sendform}
                type="submit"
                className={`rounded-lg bg-blue-700 px-8 py-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                  theme === "dark"
                    ? "border border-transparent"
                    : "border border-gray-300"
                }`}
              >
                Submit

              </button>
            </div>
            
         
       
      </div>
    </div>
  );
};

export default ApplicationForm;
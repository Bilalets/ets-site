import React, { useState, useEffect, useRef } from "react";
import cities, { City } from "./cities"; // Ensure this path is correct
import { useTheme } from "next-themes";
import Image from "next/image"; // Import Image component from Next.js
import { CldUploadWidget } from "next-cloudinary";
import axios from "axios";
import toast from "react-hot-toast";
import { HiClipboardCopy } from "react-icons/hi";

interface ApplicationFormProps {
  isVisible: boolean;
  onClose: () => void;
  theme: "light" | "dark";
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
  const [Name, setName] = useState<string>();
  const [FatherName, SetFatherName] = useState<string>();
  const [province, setProvince] = useState<string>();
  const [city, setCity] = useState<string>();
  const [cnic, setCnic] = useState<string>();
  const [mobile, setMobile] = useState<string>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ cnic?: string; mobile?: string }>({});
  const [picImage, setImage] = useState<string>();
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>();
  const [date, setDate] = useState<string>();
  const [addqualification, setqualification] = useState<string>();
  const paymentTextRef = useRef<HTMLInputElement>(null);

  const sendform = async () => {
    try {
      const formattedDate = new Date(date).toISOString();
      await axios.post("/api/usersapplications", {
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
        Imageurl: picImage,
      });

      onClose();
      toast.success("Application Successfully Submitted"); // Close modal upon successful submission
    } catch (error) {
      // Handle error if needed
      toast.error("Error Submiting Application");
    }
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handlequalification = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setqualification(e.target.value);
  };

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

  const handleCopyText = () => {
    if (paymentTextRef.current) {
      paymentTextRef.current.select();
      document.execCommand("copy");
    }
  };

  // Filter cities based on selected province
  const filteredCities: City[] = province
    ? cities.filter((c) => c.province === province)
    : [];

  const handleUploadSuccess = (result) => {
    const imageUrl = result.info.secure_url; // Get the secure URL of the uploaded image
    setImage(imageUrl);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value); // Update the 'name' state with the input value
  };
  const handleFatherNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetFatherName(e.target.value); // Update the 'name' state with the input value
  };
  const fatherNameLabel = `Father&apos;s Name`;
  const fatherNamePlaceholder = `Enter your Father's Name`;
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
                theme === "dark" ? "placeholder-white" : "placeholder-gray-500"
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
              Father's Name
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
                theme === "dark" ? "placeholder-white" : "placeholder-gray-500"
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
              type="T=text"
              id="cnic"
              className={`border bg-transparent ${
                theme === "dark"
                  ? "border-white text-white"
                  : "border-gray-300 text-black"
              } block w-full rounded-lg p-3 text-sm ${
                theme === "dark" ? "placeholder-white" : "placeholder-gray-500"
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
              type="text"
              id="mobile"
              className={`border bg-transparent ${
                theme === "dark"
                  ? "border-white text-white"
                  : "border-gray-300 text-black"
              } block w-full rounded-lg p-3 text-sm ${
                theme === "dark" ? "placeholder-white" : "placeholder-gray-500"
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
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className={`border bg-transparent ${
                theme === "dark"
                  ? "border-white text-white"
                  : "border-gray-300 text-black"
              } block w-full rounded-lg p-3 text-sm ${
                theme === "dark" ? "placeholder-white" : "placeholder-gray-500"
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
                theme === "dark" ? "placeholder-white" : "placeholder-gray-500"
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

          <div className="relative mb-4 w-full px-4 md:w-1/2">
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
                theme === "dark" ? "placeholder-white" : "placeholder-gray-500"
              }`}
              style={{ color: theme === "dark" ? "white" : "black" }}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option
                style={{
                  backgroundColor: theme === "dark" ? "#4B5563" : "white",
                  color: theme === "dark" ? "white" : "black",
                }}
                value=""
              >
                Select your gender
              </option>
              <option
                style={{
                  backgroundColor: theme === "dark" ? "#4B5563" : "white",
                  color: theme === "dark" ? "white" : "black",
                }}
                value="matric"
              >
                Male
              </option>
              <option
                style={{
                  backgroundColor: theme === "dark" ? "#4B5563" : "white",
                  color: theme === "dark" ? "white" : "black",
                }}
                value="intermediate"
              >
                Female
              </option>
              <option
                style={{
                  backgroundColor: theme === "dark" ? "#4B5563" : "white",
                  color: theme === "dark" ? "white" : "black",
                }}
                value="bachelors"
              >
                Other
              </option>
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
                theme === "dark" ? "placeholder-white" : "placeholder-gray-500"
              }`}
              style={{ color: theme === "dark" ? "white" : "black" }}
              value={province}
              onChange={handleProvinceChange}
              required
            >
              <option
                style={{
                  backgroundColor: theme === "dark" ? "#4B5563" : "white",
                  color: theme === "dark" ? "white" : "black",
                }}
                value=""
              >
                Select your province
              </option>
              {provinces.map((province, index) => (
                <option
                  key={index}
                  style={{
                    backgroundColor: theme === "dark" ? "#4B5563" : "white",
                    color: theme === "dark" ? "white" : "black",
                  }}
                  value={province}
                >
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
                theme === "dark" ? "placeholder-white" : "placeholder-gray-500"
              }`}
              style={{ color: theme === "dark" ? "white" : "black" }}
              value={city}
              onChange={handleCityChange}
              required
            >
              <option
                style={{
                  backgroundColor: theme === "dark" ? "#4B5563" : "white",
                  color: theme === "dark" ? "white" : "black",
                }}
                value=""
              >
                Select your city
              </option>
              {filteredCities.map((city, index) => (
                <option
                  key={index}
                  style={{
                    backgroundColor: theme === "dark" ? "#4B5563" : "white",
                    color: theme === "dark" ? "white" : "black",
                  }}
                  value={city.name}
                >
                  {city.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="relative mb-4 flex flex-col items-center">
          <div>
            <p className="text-center">Faisal Bank IBN</p>
          </div>

          <div className="relative rounded-lg border border-gray-300">
            <input
              ref={paymentTextRef}
              type="text"
              value="PK07FAYS3296787000001619"
              readOnly
              className={`border-2 bg-gray-100 dark:bg-gray-800 ${
                theme === "dark"
                  ? "border-black text-white"
                  : "border-black text-black"
              } rounded-lg pl-3 pr-10 text-sm ${theme === "dark" ? "placeholder-white" : "placeholder-gray-500"}`}
              style={{
                color: theme === "dark" ? "white" : "black",
                height: "40px",
                width: "280px",
              }} // Increase height of input field
            />
            <HiClipboardCopy
              className={`absolute right-2 top-2 cursor-pointer text-gray-400 dark:text-gray-300`}
              onClick={handleCopyText}
            />
          </div>
        </div>
        <div className="mb-4 flex flex-row items-center justify-center md:flex-row">
          <div className="w-full p-2 md:w-1/2">
            <Image
              src="/images/QRcode/ets.jpg"
              alt="Payment Instructions"
              layout="responsive"
              width={300}
              height={300}
              className="h-auto w-full"
            />
          </div>
          <div className="w-full p-2 md:w-1/2">
            <Image
              src="/images/QRcode/ets2.jpg"
              alt="Another Image"
              layout="responsive"
              width={280}
              height={280}
              className="h-auto w-full"
            />
          </div>
        </div>
        <CldUploadWidget
          uploadPreset="test_upload"
          onSuccess={handleUploadSuccess}
        >
          {({ open }) => {
            return (
              <button
                className={`flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium focus:outline-none focus:ring-4 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-green-500 via-teal-600 to-green-700 text-white hover:from-teal-600 hover:via-green-700 hover:to-teal-800 focus:ring-teal-300"
                    : "bg-gradient-to-r from-green-400 via-teal-500 to-green-600 text-white hover:from-teal-500 hover:via-green-600 hover:to-teal-700 focus:ring-green-300"
                }`}
                onClick={() => open()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Upload an Image
              </button>
            );
          }}
        </CldUploadWidget>

        {!picImage && (
          <p className="mt-2 text-red-500">Please upload an image.</p>
        )}
        <div className="mt-4 flex flex-col gap-4 px-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            className={`mb-2 flex transform items-center justify-center gap-2 rounded-lg px-8 py-4 text-center text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 sm:mb-0 ${
              theme === "dark"
                ? "border border-transparent bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:ring-red-500"
                : "border border-gray-300 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 focus:ring-red-300"
            }`}
            onClick={onClose}
          >
            Close
          </button>

          <button
            onClick={sendform}
            type="submit"
            className={`flex transform items-center justify-center gap-2 rounded-lg px-8 py-4 text-center text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 ${
              theme === "dark"
                ? "border border-transparent bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 focus:ring-blue-500"
                : "border border-gray-300 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 focus:ring-blue-300"
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

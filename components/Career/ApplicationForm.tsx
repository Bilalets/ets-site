import React, { useState, useEffect } from "react";
import cities, { City } from "./cities"; // Ensure this path is correct
import { useTheme } from "next-themes";
import PaymentModal from "./paymentmodal";

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
  const [gender, setGender] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [cnic, setCnic] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ cnic?: string; mobile?: string }>({});
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [paymentUploaded, setPaymentUploaded] = useState<boolean>(false); // Track payment slip upload

  useEffect(() => {
    if (!isVisible) {
      resetForm();
    }
  }, [isVisible]);

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

  const resetForm = () => {
    setGender("");
    setProvince("");
    setCity("");
    setCnic("");
    setMobile("");
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        resetForm();
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

  const closeModal = () => {
    setShowModal(false);
  };

  if (!isVisible) {
    return null;
  }

  const handleUploadPaymentSlip = (): void => {
    const fileInput = document.getElementById(
      "payment-receipt",
    ) as HTMLInputElement;

    if (!fileInput.files || fileInput.files.length === 0) {
      alert("Please choose a file to upload.");
      return;
    }

    setTimeout(() => {
      setPaymentUploaded(true);
      closeModal();
    }, 1000);
  };

  const fatherNameLabel = `Father&apos;s Name`;
  const fatherNamePlaceholder = `Enter your father&apos;s name`;

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

        {isSubmitted ? (
          <div className="text-center text-lg font-semibold text-green-600">
            Application submitted successfully!
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                  placeholder="Enter your father's name"
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
                  type="text"
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
                  type="text"
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
                    value="male"
                  >
                    Male
                  </option>
                  <option
                    style={{
                      backgroundColor: theme === "dark" ? "#4B5563" : "white",
                      color: theme === "dark" ? "white" : "black",
                    }}
                    value="female"
                  >
                    Female
                  </option>
                  <option
                    style={{
                      backgroundColor: theme === "dark" ? "#4B5563" : "white",
                      color: theme === "dark" ? "white" : "black",
                    }}
                    value="other"
                  >
                    Other
                  </option>
                </select>
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
                  {provinces.map((province) => (
                    <option
                      key={province}
                      value={province}
                      style={{
                        backgroundColor: theme === "dark" ? "#4B5563" : "white",
                        color: theme === "dark" ? "white" : "black",
                      }}
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
                    theme === "dark"
                      ? "placeholder-white"
                      : "placeholder-gray-500"
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
                  {filteredCities.map((city) => (
                    <option
                      key={city.name}
                      value={city.name}
                      style={{
                        backgroundColor: theme === "dark" ? "#4B5563" : "white",
                        color: theme === "dark" ? "white" : "black",
                      }}
                    >
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
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
              <div className="flex flex-grow items-center justify-center px-2">
                <button
                  type="button"
                  className={`rounded-lg bg-green-500 px-20 py-4 text-center text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 ${
                    theme === "dark"
                      ? "border border-transparent"
                      : "border border-gray-300"
                  }`}
                  onClick={handlePaynowClick}
                >
                  Pay Now
                </button>
              </div>
              <button
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
          </form>
        )}
        <PaymentModal
          showModal={showModal}
          theme={theme}
          closeModal={closeModal}
          handleUploadPaymentSlip={handleUploadPaymentSlip}
        />
      </div>
    </div>
  );
};

export default ApplicationForm;

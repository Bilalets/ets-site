import React, { useRef, useState } from "react";
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
  const [gender, setGender] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [fatherName, setFatherName] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [cnic, setCnic] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [picImage, setImage] = useState<string>("");
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [qualification, setQualification] = useState<string>("");


  const sendForm = async () => {
    if (!validateForm()) return;

    try {
      const formattedDate = new Date(date).toISOString();
      await axios.post('/api/usersapplications', {
        Name: name,
        FatherName: fatherName,
        CNIC: cnic,
        MobileNumber: mobile,
        Email: email,
        DateOfBirth: formattedDate,
        Gender: gender,
        Qualification: qualification,
        Province: province,
        City: city,
        Imageurl: picImage
      });

      onClose();
      toast.success('Application Successfully Submitted');
    } catch (error) {
      toast.error('Error Submitting Application');
    }
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
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
    const newErrors: { [key: string]: string } = {};

    if (!name) newErrors.name = "Please fill in the Name";
    if (!fatherName) newErrors.fatherName = "Please fill in the Father's Name";
    if (!cnic || cnic.length !== 13) newErrors.cnic = "CNIC must be 13 digits long";
    if (!mobile || mobile.length < 10 || mobile.length > 11) newErrors.mobile = "Mobile number must be 10 to 11 digits long";
    if (!email) newErrors.email = "Please fill in the Email";
    if (!date) newErrors.date = "Please fill in the Date of Birth";
    if (!qualification) newErrors.qualification = "Please select a Qualification";
    if (!gender) newErrors.gender = "Please select a Gender";
    if (!province) newErrors.province = "Please select a Province";
    if (!city) newErrors.city = "Please select a City";
    if (!picImage) newErrors.picImage = "Please upload an image";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUploadSuccess = (result) => {
    const imageUrl = result.info.secure_url; // Get the secure URL of the uploaded image
    setImage(imageUrl);
  };
const filteredCities: City[] = province
    ? cities.filter((c) => c.province === province)
    : [];
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
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
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
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
            {errors.fatherName && (
              <p className="text-sm text-red-500">{errors.fatherName}</p>
            )}
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
              value={cnic}
              onChange={handleCnicChange}
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
              value={mobile}
              onChange={handleMobileChange}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="mb-4 w-full px-4 md:w-1/2">
            <label
              htmlFor="date"
              className={`mb-2 block text-sm font-medium ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
              className={`border bg-transparent ${
                theme === "dark"
                  ? "border-white text-white"
                  : "border-gray-300 text-black"
              } block w-full rounded-lg p-3 text-sm ${
                theme === "dark"
                  ? "placeholder-white"
                  : "placeholder-gray-500"
              }`}
              required
            />
            {errors.date && (
              <p className="text-sm text-red-500">{errors.date}</p>
            )}
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
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className={`border bg-transparent ${
                theme === "dark"
                  ? "border-white text-white"
                  : "border-gray-300 text-black"
              } block w-full rounded-lg p-3 text-sm ${
                theme === "dark"
                  ? "placeholder-white"
                  : "placeholder-gray-500"
              }`}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-sm text-red-500">{errors.gender}</p>
            )}
          </div>
          <div className="mb-4 w-full px-4 md:w-1/2">
            <label
              htmlFor="qualification"
              className={`mb-2 block text-sm font-medium ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Qualification
            </label>
            <input
              type="text"
              id="qualification"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              className={`border bg-transparent ${
                theme === "dark"
                  ? "border-white text-white"
                  : "border-gray-300 text-black"
              } block w-full rounded-lg p-3 text-sm ${
                theme === "dark"
                  ? "placeholder-white"
                  : "placeholder-gray-500"
              }`}
              placeholder="Enter your qualification"
              required
            />
            {errors.qualification && (
              <p className="text-sm text-red-500">{errors.qualification}</p>
            )}
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
              value={province}
              onChange={handleProvinceChange}
              className={`border bg-transparent ${
                theme === "dark"
                  ? "border-white text-white"
                  : "border-gray-300 text-black"
              } block w-full rounded-lg p-3 text-sm ${
                theme === "dark"
                  ? "placeholder-white"
                  : "placeholder-gray-500"
              }`}
              required
            >
              <option value="">Select Province</option>
              {provinces.map((province, index) => (
                <option key={index} value={province}>
                  {province}
                </option>
              ))}
            </select>
            {errors.province && (
              <p className="text-sm text-red-500">{errors.province}</p>
            )}
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
<p className="text-red-600">NOTE: Kindly, scan the QR code OR copy the IBAN number to pay the registration fee, please. After succesful transaction, upload the receipt.</p>

          <div className="flex justify-center mt-8 items-center ml-8 lg:ml-48 mb-4">
            
  <div className="flex flex-col items-center">
    <p className="text-center">Faisal Bank IBN</p>
    <div className="relative mt-2 rounded-lg border border-gray-300">
      <input
        type="text"
        value="PK07FAYS3296787000001619"
        readOnly
        className={`border-1 bg-gray-100 dark:bg-gray-800 ${
          theme === "dark" ? "border-black text-white" : "border-black text-black"
        } rounded-lg pl-3 text-sm ${theme === "dark" ? "placeholder-white" : "placeholder-gray-500"}`}
        style={{
          color: theme === "dark" ? "white" : "black",
          height: "40px",
          width: "280px",
        }}
      />
    </div>
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
          <div className="mb-4 w-full px-4 md:w-1/2">
            <label
              htmlFor="picImage"
              className={`mb-2 block text-sm font-medium ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Upload Image
            </label>
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
            {errors.picImage && (
              <p className="text-sm text-red-500">{errors.picImage}</p>
            )}
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            type="submit"
            onClick={sendForm}
            className="w-full rounded-lg bg-blue-500 py-2 px-4 font-semibold text-white hover:bg-blue-700"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="mt-2 w-full rounded-lg bg-gray-500 py-2 px-4 font-semibold text-white hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;

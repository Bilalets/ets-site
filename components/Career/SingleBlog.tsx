"use client";
import { useState } from "react";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Modal from "./modal";
import ApplicationForm from "./ApplicationForm";
import { useTheme } from "next-themes";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const { theme } = useTheme();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col justify-center w-full md:w-3/4 lg:w-1/2 mx-auto h-auto gap-5 rounded-md mb-7 px-6 py-4 ${
            theme === "dark"
              ? "border border-white text-white"
              : "border border-black text-black"
          }`}
        >
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="text-sm md:text-base lg:text-lg">{author.icon}</div>
              <div className={`ml-3 text-sm md:text-lg font-medium`}>{title}</div>
            </div>
            <div className={`text-gray-600 text-xs md:text-sm lg:text-base`}>
              {publishDate}
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <p className="flex-1 text-sm md:text-base lg:text-lg">{paragraph}</p>
            <button
              className="ml-auto mt-4 md:mt-0 bg-blue-500 hover:bg-blue-600 text-white text-xs md:text-sm lg:text-base px-4 py-1 rounded-md shadow-md transition-colors duration-300 ease-in-out"
              onClick={toggleModal}
            >
              See More
            </button>
          </div>
          <Modal isVisible={isModalVisible} onClose={toggleModal}>
            <Image src={image} alt="Unable to Load image" width={700} height={500} />
          </Modal>
          <div className="flex flex-row justify-between items-center mt-4">
            <div className="flex">
              <span className="bg-green-500 text-white text-xs md:text-sm lg:text-base px-2 py-1 rounded-md mr-2">
                Full time
              </span>
              <span className="bg-blue-500 text-white text-xs md:text-sm lg:text-base px-2 py-1 rounded-md">
                On-Site
              </span>
            </div>
            <button
              className="ml-auto bg-blue-500 hover:bg-blue-600 text-white text-xs md:text-sm lg:text-base px-4 py-1 rounded-md shadow-md transition-colors duration-300 ease-in-out"
              onClick={toggleForm}
            >
              Apply Now
            </button>
          </div>
          <ApplicationForm isVisible={isFormVisible} onClose={toggleForm} />
        </div>
      </div>
    </>
  );
};

export default SingleBlog;

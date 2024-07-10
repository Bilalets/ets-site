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
          className={`mx-auto mb-7 flex h-auto w-full flex-col justify-center gap-5 rounded-md px-6 py-4 md:w-3/4 lg:w-1/2 ${
            theme === "dark"
              ? "border border-white text-white"
              : "border border-black text-black"
          }`}
        >
          <div className="mb-4 flex flex-row items-center justify-between">
            <div className="flex items-center">
              <div className="text-sm md:text-base lg:text-lg">
                {author.icon}
              </div>
              <div className={`ml-3 text-sm font-medium md:text-lg`}>
                {title}
              </div>
            </div>
            <div className={`text-xs text-gray-600 md:text-sm lg:text-base`}>
              {publishDate}
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <p className="flex-1 text-sm md:text-base lg:text-lg">
              {paragraph}
            </p>
            <button
              className="ml-auto mt-4 transform rounded-md bg-gradient-to-r from-blue-500 to-blue-600 px-4
   py-2 text-xs text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:from-blue-600 hover:to-blue-700 focus:outline-none 
   focus:ring-4 focus:ring-blue-300 md:mt-0 md:text-sm lg:text-base"
              onClick={toggleModal}
            >
              See More
            </button>
          </div>
          <Modal isVisible={isModalVisible} onClose={toggleModal}>
            <Image
              src={image}
              alt="Unable to Load image"
              width={700}
              height={500}
            />
          </Modal>
          <div className="mt-4 flex flex-row items-center justify-between">
            <div className="flex">
              <span className="mr-2 rounded-md bg-green-500 px-2 py-1 text-xs text-white md:text-sm lg:text-base">
                Full time
              </span>
              <span className="rounded-md bg-blue-500 px-2 py-1 text-xs text-white md:text-sm lg:text-base">
                On-Site
              </span>
            </div>
            <button
              className="ml-auto transform rounded-md bg-gradient-to-r from-blue-500 to-blue-600
   px-4 py-2 text-xs text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:from-blue-600 hover:to-blue-700 
   focus:outline-none focus:ring-4 focus:ring-blue-300 md:text-sm lg:text-base"
              onClick={toggleForm}
            >
              Apply Now
            </button>
          </div>
          {isFormVisible && (
            <ApplicationForm
              isVisible={isFormVisible}
              onClose={toggleForm}
              theme={"dark"}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SingleBlog;

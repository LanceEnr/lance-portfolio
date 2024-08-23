import React, { useState } from "react";
import { data } from "../data/data.js";

const Work = () => {
  // State for Modal
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the modal
  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const project = data;

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-600">
            Work
          </p>
          <p className="py-6">// Check out some of the works I've done</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div cursor-pointer"
              onClick={() => openModal(item.image)} // Add this line
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl text-white tracking-wider">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={item.github} target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg">
                      Github Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
            onClick={closeModal}
          >
            <div className="relative p-4 bg-gray-700 rounded-lg">
              <img
                src={selectedImage}
                alt="Full Size"
                className="max-w-[90vw] max-h-[80vh] object-contain rounded-md"
              />
              <button
                className="absolute top-0 right-0 text-white bg-gray-700 px-4 py-2 rounded-bl-lg"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;

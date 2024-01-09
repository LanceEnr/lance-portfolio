import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Lance, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              As a 4th year BS Information Technology student at the University
              of Santo Tomas, I am deeply interested in web development. While I
              have had the opportunity to explore full stack development, my
              focus has been more towards front-end development. I am currently
              seeking an internship that will allow me to further develop and
              refine my skills. I am eager to learn, grow, and contribute to a
              team while continuing my journey in this exciting field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

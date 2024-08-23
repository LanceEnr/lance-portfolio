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
              As a dedicated web developer with hands-on experience in both
              front-end and back-end technologies, I’ve led impactful projects
              and collaborated with diverse teams. My recent role as a Lead Full
              Stack Developer Intern at the University of Santo Tomas involved
              spearheading the development of a comprehensive risk monitoring
              platform, utilizing a robust tech stack to enhance functionality
              and user experience. Previously, as a Junior Frontend Developer
              for D’Trio Coffee, I crafted a responsive e-commerce site,
              improving design and functionality to boost customer engagement.
              My technical skills span Java, JavaScript, ReactJS, and more, with
              a passion for continuous learning and problem-solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

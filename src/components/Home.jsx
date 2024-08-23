import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed"; // Update here

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-yellow-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Lance Enriquez,
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          <ReactTyped
            strings={[
              "A Dedicated Web Developer",
              "A Video Game Dork",
              "A Gym Head",
              "A Tech Fanatic",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          A driven web developer with a hunger for growth and innovation, I’m
          always ready to explore new horizons in the tech world.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

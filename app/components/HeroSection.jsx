"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {" "}
              Hello, I'm{" "}
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Ahmad Saleh",
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                "Software Engineer",
                3000,
                "Full Stack Web Developer (MERN)",
                3000,
                "Front-End Developer",
                3000,
                "Back-End Developer",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Empowering businesses with dynamic web applications as a full stack
            web developer, merging creativity with cutting-edge development
            expertise.
          </p>
          <div>
            <a
              href="/#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-slate-200
              
            "
            >
              Hire Me
            </a>
            <a href="/images/resume.pdf" download="Ahmad-resume">
              <button className="px-1 w-full py-1 rounded-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] rounded-full hover:bg-slate-800 px-5 py-2">
                  {" "}
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mt-3">
            <Image
              src="/images/hero-section.jpg"
              alt="Hero Image"
              width={300}
              height={300}
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

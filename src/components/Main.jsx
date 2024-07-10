import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import foto from "../assets/foto-feri.jpg";

const Main = () => {
  return (
    <div id="main">
      <img
        src="https://images.unsplash.com/photo-1720456990647-bf68a1f94b85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full h-screen object-cover"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Hi there, I'm Ferial Majid 👋
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Tech Enthusiast",
                2000,
                "Freelancer",
                2000,
                "Startup Co-founder",
                2000,
                "Builder",
                2000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "10px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://x.com/majidfer" target="blank">
              <FaTwitter size={30} className="cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/majidferial/" target="blank">
              <FaInstagram size={30} className="cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/majidfer/" target="blank">
              <FaLinkedin size={30} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import ProjectItem from "./ProjectItem";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea doloribus
        commodi saepe ipsam eaque. Non ducimus hic, minus, aliquam iure ex
        magnam odit repellat eos ab sapiente dolores nobis fugit.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={pic1} title="Project 1" />
        <ProjectItem img={pic2} title="Project 2" />
        <ProjectItem img={pic3} title="Project 3" />
        <ProjectItem img={pic4} title="Project 4" />
      </div>
    </div>
  );
};

export default Projects;

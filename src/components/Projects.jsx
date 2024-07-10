import React from "react";
import ProjectItem from "./ProjectItem";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        A Showcase of My Projects
      </h1>
      <p className="text-center py-8">
        Here are some of the projects I've worked on, showcasing my skills in
        web development, design, and more. These projects demonstrate my ability
        to create functional and visually appealing applications, utilizing a
        range of technologies and frameworks.
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

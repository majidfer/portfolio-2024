import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    title: "Product Manager",
    duration: "1 year",
    details:
      "Led the development and launch of a new mobile application, coordinating with cross-functional teams.",
  },
  {
    year: 2021,
    title: "Data Analyst",
    duration: "1.5 years",
    details:
      "Analyzed large datasets to provide actionable insights for business decisions using Python and SQL.",
  },
  {
    year: 2020,
    title: "Marketing Specialist",
    duration: "2 years",
    details:
      "Implemented and optimized digital marketing strategies, resulting in a 20% increase in online sales.",
  },
  {
    year: 2019,
    title: "Software Engineer",
    duration: "2 years",
    details:
      "Developed and maintained web applications using JavaScript, React, and Node.js.",
  },
  {
    year: 2018,
    title: "Graphic Designer",
    duration: "1 year",
    details:
      "Created visual content for marketing campaigns, including social media graphics and website banners.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;

import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "2023 - Present",
    title: "Co-founder at PT Aksamaia Rekta Nusa, Indonesia",
    duration: "1 year 3 months",
    details:
      "Co-founded and led a startup focusing on Web Development, Data Analysis, and Market Research . Coordinated with cross-functional teams manage business operations, and drove strategic growth initiatives.",
  },
  {
    year: 2022,
    title: "Trainee Full Stack Developer at Northcoders, United Kingdom",
    duration: "4 months",
    details:
      "Participated in an intensive training program to develop full-stack web development skills. Gained hands-on experience in developing and maintaining web applications using JavaScript, React, and Node.js.",
  },
  {
    year: 2021,
    title: "Associate at Amazon Fulfillment Center, United Kingdom",
    duration: "2 years",
    details:
      "Worked in a fast-paced Amazon fulfillment center, ensuring efficient handling of inventory. Responsibilities included shipping customer orders, problem solving related to the inventory, maintaining a high level of accuracy and productivity.",
  },
  {
    year: 2017,
    title: "Account Manager at PT Sangkuriang Internasional, Indonesia",
    duration: "3 years",
    details:
      "Managed a portfolio of client accounts, ensuring client satisfaction and retention. Developed and maintained strong relationships with clients, identified opportunities for upselling and cross-selling services.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      <div className="py-8">
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
    </div>
  );
};

export default Work;

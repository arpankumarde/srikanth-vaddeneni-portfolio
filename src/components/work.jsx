import React from "react";
import { bio } from "../data";

const Work = () => {
  return (
    <section id="work">
      <h1 className="title text-6xl font-semibold text-black py-2">
        Work Experience
      </h1>
      {bio.work.map((exp, key) => (
        <div key={key} className="pb-4 last:pb-0">
          <h2 className="text-3xl text-gray-800">{exp.role}</h2>
          <div className="flex items-center gap-2">
            {exp.companyLogo ? (
              <img
                src={exp.companyLogo}
                alt="logo"
                className="h-5 select-none"
                draggable="false"
              />
            ) : null}
            <h2 className="text-xl text-gray-600">{exp.company}</h2>
          </div>
          <p className="text-base">
            {exp.from} - {exp.to}
          </p>
          <ul className="list-outside px-7">
            {exp.description.map((desc, key2) => (
              <li key={key2} className="list-item list-disc">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Work;

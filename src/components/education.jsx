import React from "react";
import { bio } from "../data";

const Education = () => {
  return (
    <section id="education">
      <h1 className="title text-6xl font-semibold text-black py-2">
        Education
      </h1>
      <div className="flex flex-col-reverse gap-2 sm:flex-row-reverse">
        {bio.education.map((edu, key) => (
          <div key={key} className="pl-4 flex gap-2">
            <h2 className="text-3xl text-gray-800"> {`>>`} </h2>
            <div key={key} className="flex flex-col">
              <h2 className="text-3xl text-gray-800">{edu.title}</h2>
              <h3 className="text-xl text-gray-600">{edu.institution}</h3>
              <h4 className="text-base">
                {edu.from} - {edu.to}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

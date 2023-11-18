import React from "react";
import { bio } from "../data";

const Coursework = () => {
  return (
    <section id="coursework">
      <h1 className="title text-6xl font-semibold text-black py-2">
        Coursework
      </h1>
      <div className="flex flex-col gap-2">
        {bio.coursework.map((course, key) => (
          <h2 key={key} className="text-3xl text-gray-800 pl-4">
            {" "}
            {`>>`} {course.title}
          </h2>
        ))}
      </div>
    </section>
  );
};

export default Coursework;

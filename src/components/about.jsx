import React from "react";
import { bio } from "../data";

const About = () => {
  return (
    <section className="p-2" id="about">
      <h1 className="title text-6xl font-semibold text-black py-2">About</h1>
      <p>{bio.about}</p>
      <div className="flex justify-center sm:justify-start gap-2 sm:gap-5 mt-5 select-none">
        <button
          className="bg-azure-blue w-[50%] sm:w-auto text-gray-blue hover:border-azure-blue hover:text-azure-blue hover:bg-transparent hover:font-normal border-azure-blue font-extrabold border-2 px-4 py-2 rounded-lg"
          onClick={() => window.open(`mailto:${bio.email}`)}
        >
          Hire Me
        </button>
        <button
          className="border-azure-blue w-[50%] sm:w-auto text-azure-blue hover:bg-azure-blue hover:text-gray-blue hover:border-azure-blue hover:font-extrabold border-2 px-4 py-2 rounded-lg"
          onClick={() => window.open(`${bio.links.linkedin}`)}
        >
          Let's have a Chat
        </button>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { bio } from "../data";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="title text-6xl font-semibold text-black py-2">Projects</h1>
      <div className="flex flex-col gap-8">
        {bio.projects.map((proj, key) => (
          <div
            key={key}
            className="flex flex-col-reverse sm:flex-row items-center p-2 gap-4"
          >
            <img
              src={proj.banner}
              alt={proj.title}
              className="w-full sm:w-[30%] rounded-lg select-none"
              draggable="false"
            />
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl text-gray-800">{proj.title}</h2>
              <div className="text text-gray-600">
                {proj.description.map((desc, key2) => (
                  <div className="flex gap-2" key={key2}>
                    <span className="font-bold">{">>"}</span>
                    <p key={key2}>{desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 justify-center sm:justify-start">
                {proj.repoLink ? (
                  <a
                    href={proj.repoLink}
                    target="_blank"
                    referrerPolicy="no-referrer"
                  >
                    <FaGithub className="text-3xl text-gray-600 hover:text-black" />
                  </a>
                ) : (
                  ""
                )}
                {proj.deployLink ? (
                  <a
                    href={proj.deployLink}
                    target="_blank"
                    referrerPolicy="no-referrer"
                  >
                    <FiExternalLink className="text-3xl text-gray-600 hover:text-black" />
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

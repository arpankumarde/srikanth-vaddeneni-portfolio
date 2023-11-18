import React from "react";
import { bio } from "../data";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiOutlineCloudDownload,
  AiFillPhone,
} from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const Databar = ({ customClass }) => {
  return (
    <aside
      className={`${customClass} flex-col gap-4 items-center justify-center sm:justify-between sm:pl-2 sm:border-l-2 border-azure-blue text-gray-600`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-center m-2 select-none">
          <div>
            <img
              src={bio.avatar}
              alt="avatar"
              draggable="false"
              className="max-w-52 rounded-full border-azure-blue p-2 border-2 border-dashed w-56 drop-shadow-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="text-black text-xl">{bio.name}</p>
          <p>{bio.role}</p>
          <span className="inline-flex gap-1 items-center">
            <GoLocation className="text-sm" />
            {bio.location}
          </span>
          <span className="bg-azure-blue text-gray-blue font-semibold rounded-full text-sm mt-1 px-3 select-none">
            {bio.tag}
          </span>
        </div>
        <div className="flex gap-4 justify-center text-gray-600">
          <a
            href={bio.links.linkedin}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <AiFillLinkedin className="text-2xl hover:text-black" />
          </a>
          <a
            href={bio.links.github}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <AiFillGithub className="text-2xl hover:text-black" />
          </a>
          <a
            href={bio.links.medium}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <BsMedium className="text-2xl hover:text-black" />
          </a>
          <a href={`mailto:${bio.email}`}>
            <AiFillMail className="text-2xl hover:text-black" />
          </a>
          <a href={`tel:${bio.phone}`}>
            <AiFillPhone className="text-2xl hover:text-black" />
          </a>
        </div>
      </div>
      <button
        type="button"
        className="bg-azure-blue w-full sm:mx-2 select-none text-gray-blue font-extrabold px-2 py-3 rounded-lg flex justify-center items-center gap-1"
        onClick={() => window.open(bio.resumeLink)}
      >
        <AiOutlineCloudDownload className="inline text-2xl" />
        Download CV
      </button>
    </aside>
  );
};

export default Databar;

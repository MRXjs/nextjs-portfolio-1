import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgURL, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="relative h-52 md:h-72 rounded-t-xl group"
        style={{ background: `url(${imgURL})`, backgroundSize: "cover" }}
      >
        <div className=" items-center justify-center  overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="mr-2 border-2 h-14 w-14 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10  text-[#ADB7BE] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="border-2 h-14 w-14 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10  text-[#ADB7BE] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 mt-3">
        <h5 className="mb-2 text-xl font-semibold ">{title}</h5>
        <p className="text[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

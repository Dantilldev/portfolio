import React from "react";

export default function SkillsOverview() {
  return (
    <div className="flex flex-col md:flex-row justify-center mt-10 p-2 gap-5">
      <div className="flex flex-col w-full">
        <div className="text-left ml-2">HTML</div>
        <progress className=" progress mb-5 h-5" value="60" max="100" />
        <div className="text-left ml-2">CSS</div>
        <progress className="progress mb-5 h-5" value="60" max="100" />
        <div className="text-left ml-2">Tailwind</div>
        <progress className="progress mb-5 h-5" value="60" max="100" />
        <div className="text-left ml-2">Typescript</div>
        <progress className="progress mb-5 h-5" value="60" max="100" />
        <div className="text-left ml-2">Node</div>
        <progress className="progress mb-5 h-5" value="60" max="100" />
      </div>
      <div className="flex flex-col w-full">
        <div className="text-left ml-2">Javascript</div>
        <progress className="progress mb-5 h-5" value="60" max="100" />
        <div className="text-left ml-2">React</div>
        <progress className="progress mb-5 h-5" value="60" max="100" />
        <div className="text-left ml-2">React Native</div>
        <progress className="progress mb-5 h-5" value="60" max="100" />
        <div className="text-left ml-2">Git Hub</div>
        <progress className="progress mb-5 h-5" value="60" max="100" />
        <div className="text-left ml-2">...</div>
        <progress className="progress mb-5 h-5" value="60" max="100" />
      </div>
    </div>
  );
}

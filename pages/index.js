import React from "react";
import {useProjects} from "./contexts/ProjectContext";
import {useSkills} from "./contexts/SkillContext";
import Hero from "./components/Hero";
import SkillsOverview from "./components/skills_overview";

export default function Home() {
  const {projects} = useProjects();
  const {skills} = useSkills();

  // console.log("projects; ", projects);
  // console.log("skills ; ", skills);

  return (
    <div className="min-h-screen">
      <Hero />
      {/* Skill Section */}
      <section id="skills" className="mt-16 text-center bg-gray-50 p-8">
        <h2 className="text-3xl mb-4">My Skills</h2>
        {/* Addera skills */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div key={skill.id} className="p-2  rounded-md shadow-md">
              <img
                src={skill.image}
                alt={skill.name}
                className="h-14 w-full object-cover"
              />
              <small className="text-sm">{skill.name}</small>
            </div>
          ))}
        </div>
        <div>
          <SkillsOverview />
        </div>
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        className="mt-16 text-center  m-1 flex flex-col justify-center items-center"
      >
        <h2 className="text-3xl mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
          {projects.map((project) => (
            <div className="card bg-base-100 w-80 shadow-xl" key={project.id}>
              <figure>
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-52 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2 my-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-sm bg-slate-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className=" flex flex-row justify-between">
                  <a
                    href={project.url}
                    className="text-blue-500 underline"
                    target="_blank"
                  >
                    See live
                  </a>
                  <a
                    href={project.github}
                    className="text-gray-500 underline"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

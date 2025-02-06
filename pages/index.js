import React from "react";
import Link from "next/link";
import Header from "./components/Header";
import {useEffect} from "react";
import {useProjects} from "./contexts/ProjectContext";
import {useSkills} from "./contexts/SkillContext";

export default function Home() {
  const {projects} = useProjects();
  const {skills} = useSkills();

  useEffect(() => {
    console.log("projects; ", projects);
  }, [projects]);

  useEffect(() => {
    console.log("skills ; ", skills);
  });

  return (
    <div>
      <Header />
      {/* Home Section */}
      <section
        id="home"
        className="text-center mt-16 flex flex-col items-center"
      >
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div>
            <h2 className="text-4xl mb-4">Hi, I'm Daniel Tilleria</h2>
            <p className="text-xl">I'm a Frontend Developer</p>
            <div className="mt-8 space-x-4">
              <Link href="/contact">
                <button className="px-6 py-3 bg-orange-600 text-white">
                  Contact Me
                </button>
              </Link>
              <Link href="#about-me">
                <button className="px-6 py-3 bg-black text-white">
                  About Me
                </button>
              </Link>
            </div>
          </div>
          <div className="rounded-full overflow-hidden shadow-lg">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-300 items-center justify-center">
              <img
                src="/me.jpeg"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Skill Section */}
      <section id="skills" className="mt-16 text-center">
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
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        className="mt-16 text-center p-5 m-1 flex flex-col justify-center items-center"
      >
        <h2 className="text-3xl mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
      <footer className="mt-16 py-6 text-center">
        <small>&copy; 2025 Daniel Tilleria. All rights reserved.</small>
      </footer>
    </div>
  );
}

import {createContext, useContext, useState, useEffect} from "react";

const ProjectContext = createContext();

export function ProjectProvider({children}) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("projects");
    if (saved) setProjects(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = (project) => {
    setProjects([...projects, {...project, id: crypto.randomUUID()}]);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const updateProject = (id, updatedProject) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? {...updatedProject, id} : project
      )
    );
  };

  return (
    <ProjectContext.Provider
      value={{projects, addProject, deleteProject, updateProject}}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export const useProjects = () => useContext(ProjectContext);

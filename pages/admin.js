import {useState, useEffect} from "react";
import {useProjects} from "./contexts/ProjectContext";
import {useSkills} from "./contexts/SkillContext";
import Link from "next/link";

export default function Admin() {
  const {projects, addProject, deleteProject, updateProject} = useProjects();
  // const {skills, addSkill, deleteSkill} = useSkills();

  // State for  skill form
  // const [skillName, setSkillName] = useState("");
  // const [skillImage, setSkillImage] = useState("");

  // State for login
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // State to handle project form
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [projectGithub, setProjectGithub] = useState("");
  const [projectTech, setProjectTech] = useState("");
  // State to handle editing
  const [editingIndex, setEditingIndex] = useState(null);

  // Använd useEffect för att kontrollera login-status från localStorage
  useEffect(() => {
    const savedLoginStatus = localStorage.getItem("loggedIn");
    if (savedLoginStatus === "true") {
      setLoggedIn(true);
    }
  }, []);

  function handleCreateProject(e) {
    e.preventDefault();
    if (
      projectName &&
      projectDescription &&
      projectImage &&
      projectUrl &&
      projectGithub &&
      projectTech
    ) {
      const newProject = {
        name: projectName,
        description: projectDescription,
        image: projectImage,
        url: projectUrl,
        github: projectGithub,
        tech: projectTech.split(",").map((tech) => tech.trim()),
      };
      addProject(newProject); // Använd addProject från contexten
      resetForm();
    }
  }

  function resetForm() {
    setProjectName("");
    setProjectDescription("");
    setProjectImage("");
    setProjectUrl("");
    setProjectGithub("");
    setProjectTech("");
  }

  function handleLogin() {
    if (username === "admin" && password === "3232") {
      setLoggedIn(true);
      localStorage.setItem("loggedIn", "true"); // Spara loginstatus i localStorage
    } else {
      alert("Invalid login");
    }
  }

  function handleDelete(id) {
    deleteProject(id); // Använd deleteProject från contexten
  }

  function handleSaveEdit(index) {
    const updatedProject = {
      name: projectName,
      description: projectDescription,
      image: projectImage,
      url: projectUrl,
      github: projectGithub,
      tech: projectTech.split(",").map((tech) => tech.trim()),
    };
    updateProject(projects[index].id, updatedProject); // Använd updateProject från contexten
    setEditingIndex(null);
    resetForm();
  }

  function handleEdit(project, index) {
    setEditingIndex(index);
    setProjectName(project.name);
    setProjectDescription(project.description);
    setProjectImage(project.image);
    setProjectUrl(project.url);
    setProjectGithub(project.github);
    setProjectTech(project.tech.join(", "));
  }

  // If user is not logged in, show login form
  if (!loggedIn) {
    return (
      <div className="flex flex-col w-56 mt-10 gap-6 h-screen mx-auto">
        <input
          className="input input-bordered"
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input input-bordered"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn bg-green-500" onClick={handleLogin}>
          Logga in
        </button>
        <button className="border border-slate-500">
          <Link href="/">Home</Link>
        </button>
      </div>
    );
  }
  // If user is logged in, show admin page
  return (
    <div className="p-5">
      <div className="flex justify-between p-5">
        <h1 className="text-2xl font-bold">Admin</h1>
        <button
          className="btn"
          onClick={() => {
            setLoggedIn(false);
            localStorage.setItem("loggedIn", "false");
          }}
        >
          Logga ut
        </button>
      </div>
      <div className="flex gap-10">
        <form
          className="flex flex-col gap-4 mb-5 w-80"
          onSubmit={
            editingIndex !== null
              ? () => handleSaveEdit(editingIndex)
              : handleCreateProject
          }
        >
          <h3 className="text-xl font-bold text-center">Projects</h3>
          <input
            value={projectName}
            className="input input-bordered"
            type="text"
            placeholder="Project name"
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
          <input
            value={projectDescription}
            className="input input-bordered"
            type="text"
            placeholder="Project description"
            onChange={(e) => setProjectDescription(e.target.value)}
            required
          />
          <input
            value={projectImage}
            className="input input-bordered"
            type="text"
            placeholder="Project image URL"
            onChange={(e) => setProjectImage(e.target.value)}
            required
          />
          <input
            value={projectTech}
            className="input input-bordered"
            type="text"
            placeholder="Technologies used (comma-separated)"
            onChange={(e) => setProjectTech(e.target.value)}
            required
          />
          <input
            value={projectUrl}
            className="input input-bordered"
            type="text"
            placeholder="Project link"
            onChange={(e) => setProjectUrl(e.target.value)}
          />

          <input
            value={projectGithub}
            className="input input-bordered"
            type="text"
            placeholder="Project GitHub"
            onChange={(e) => setProjectGithub(e.target.value)}
          />
          <button type="submit" className="btn bg-blue-500">
            {editingIndex !== null ? "Save" : "Add project"}
          </button>
        </form>

        {/* Skills form */}
        <form className="flex flex-col gap-4 mb-5 w-80">
          <h3 className="text-xl font-bold text-center">Tech skills</h3>
          <input
            className="input input-bordered"
            type="text"
            placeholder="Skill"
          />
          <input
            className="input input-bordered"
            type="text"
            placeholder="Skill image URL"
          />
          <button className="btn bg-blue-500">Add skill</button>
        </form>
      </div>

      {/* Projects  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div className="card w-80 border" key={project.id}>
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
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-sm bg-gray-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between gap-2 my-2">
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
              <div className="card-actions justify-end mt-4">
                <button
                  className="btn btn-sm bg-yellow-500"
                  onClick={() => handleEdit(project, index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm bg-red-500"
                  onClick={() => handleDelete(project.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

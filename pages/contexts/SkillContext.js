import {createContext, useEffect, useContext, useState} from "react";

const SkillContext = createContext();

export function SkillProvider({children}) {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("skills");
    if (saved) setSkills(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);

  function addSkill(skill) {
    setSkills((currentSkills) => [
      ...currentSkills,
      {
        id: crypto.randomUUID(),
        ...skill,
      },
    ]);
  }

  function deleteSkill(id) {
    setSkills((currentSkills) =>
      currentSkills.filter((skill) => skill.id !== id)
    );
  }

  return (
    <SkillContext.Provider value={{skills, addSkill, deleteSkill}}>
      {children}
    </SkillContext.Provider>
  );
}

export function useSkills() {
  return useContext(SkillContext);
}

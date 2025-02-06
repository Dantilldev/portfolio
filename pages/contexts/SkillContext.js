// import React, {createContext, useContext, useState, useEffect} from "react";

// const SkillsContext = createContext();

// export function useSkills() {
//   return useContext(SkillsContext);
// }

// export function SkillsProvider({children}) {
//   //
//   const [skills, setSkills] = useState(() => {
//     const savedSkills = localStorage.getItem("skills");
//     return savedSkills ? JSON.parse(savedSkills) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("skills", JSON.stringify(skills));
//   }, [skills]);

//   // Addera skill
//   function addSkill(skill) {
//     setSkills([...skills, skill]);
//   }
//   // Delete skill
//   function deleteSkill(skillName) {
//     setSkills(skills.filter((skill) => skill.name !== skillName));
//   }

//   return (
//     <SkillsContext.Provider value={{skills, addSkill, deleteSkill}}>
//       {children}
//     </SkillsContext.Provider>
//   );
// }
// export default SkillsProvider;

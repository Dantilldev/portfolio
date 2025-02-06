import "@/styles/globals.css";
import {ProjectProvider} from "./contexts/ProjectContext";
import {SkillProvider} from "./contexts/SkillContext";

export default function App({Component, pageProps}) {
  return (
    <ProjectProvider>
      <SkillProvider>
        <Component {...pageProps} />
      </SkillProvider>
    </ProjectProvider>
  );
}

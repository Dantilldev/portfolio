import "@/styles/globals.css";
import {ProjectProvider} from "./contexts/ProjectContext";
import {SkillsProvider} from "./contexts/SkillContext";

export default function App({Component, pageProps}) {
  return (
    <ProjectProvider>
      {/* <SkillsProvider> */}
      <Component {...pageProps} />
      {/* </SkillsProvider> */}
    </ProjectProvider>
  );
}

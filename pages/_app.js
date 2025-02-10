import "@/styles/globals.css";
import {ProjectProvider} from "./contexts/ProjectContext";
import {SkillProvider} from "./contexts/SkillContext";
import Header from "./components/Header";
import Footer from "./components/footer";

export default function App({Component, pageProps}) {
  return (
    <ProjectProvider>
      <SkillProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SkillProvider>
    </ProjectProvider>
  );
}

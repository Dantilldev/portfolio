import "@/styles/globals.css";
import {ProjectProvider} from "./contexts/ProjectContext";

export default function App({Component, pageProps}) {
  return (
    <ProjectProvider>
      <Component {...pageProps} />
    </ProjectProvider>
  );
}

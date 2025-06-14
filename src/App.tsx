import AboutMe from "./about";
import Education from "./education";
import ProjectsSection from "./ProjectsSection";

function App() {
  return(
    <div className="min-h-screen bg-gray-700">
      <AboutMe/>
      <ProjectsSection/>
      <Education/>
    </div>
  );
}

export default App

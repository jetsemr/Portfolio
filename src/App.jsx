import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectsList from "./components/projectsList/ProjectsList";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProjectsList />
    </div>
  );
};

export default App;

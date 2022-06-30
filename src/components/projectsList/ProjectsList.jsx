import "./ProjectsList.css";
import Projects from "../projects/Projects";
import { projects } from "../../data";

const ProjectsList = () => {
  return (
    <div className="p1">
      <div className="p1-texts">
        <h1 className="p1-title">Projects & Papers</h1>
        <p className="p1-desc">This section is a work in progress.</p>
      </div>
      <div className="p1-list">
        {projects.map(item => (
          <Projects
            key={item.id}
            img={item.img}
            link={item.link}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;

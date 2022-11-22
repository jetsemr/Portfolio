import "./Projects.css";
const Projects = ({ img, link, title, desc }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-title">{title}</div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
        <div className="p-desc">{desc}</div>
      </a>
    </div>
  );
};

export default Projects;

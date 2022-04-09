import "./About.css";
import Me from "../../img/jet-newyork.jpeg";
import ResumeIcon from "../../img/resume-icon.png";
import Resume from "../../img/Jet_Semrick_Resume.pdf";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I have written code in C++, C, JavaScript, TypeScript, Python, and
          Haskell. My best experience is in React App development and general
          research.
        </p>
        <p className="a-desc">My hobbies are playing basketball and smite.</p>
        <div className="a-resume">
          <a download="Jet_Semrick_Resume.pdf" href={Resume}>
            <img src={ResumeIcon} alt="" className="a-resume-img" />
          </a>
          <div className="a-resume-texts">
            <h4 className="a-resume-title">Resume</h4>
            <p className="a-resume-desc">Last updated Fall 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

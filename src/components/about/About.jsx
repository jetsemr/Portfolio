import "./About.css";
import Me from "../../img/ski.jpeg";
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
        <h1 className="a-title">About</h1>
        <p className="a-sub">
          I am a software engineer, debater, researcher, and extremely
          recreational athlete.
        </p>
        <p className="a-desc">
          I have written code in C++, C, JavaScript, TypeScript, Python, and
          Haskell. My best experience is in React app development.
        </p>
        <br></br>
        <p className="a-desc">
          I also do legal research and coach debate. I am proficient in
          financial modeling, valuation, and basic accounting.
        </p>
        <br></br>
        <p className="a-desc">
          Currently I live in{" "}
          <span style={{ fontWeight: "bold" }}>New York City</span>, but home
          base is in <span style={{ fontWeight: "bold" }}>Kansas</span>.
        </p>
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

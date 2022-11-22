import "./About.css";
import Me from "../../img/jet-ski.jpeg";

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
          Haskell. My primary experience is in React app development.
        </p>
        <br></br>
        <p className="a-desc">
          I also do legal research and coach debate. I am proficient in
          financial modeling, valuation, and basic accounting.
        </p>
        <br></br>
        <p className="a-desc">
          Currently I am based in{" "}
          <span style={{ fontWeight: "bold" }}>Kansas</span>, but have spent
          time living in{" "}
          <span style={{ fontWeight: "bold" }}>New York City</span>.
        </p>
      </div>
    </div>
  );
};

export default About;

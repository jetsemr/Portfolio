import "./Intro.css";
import Me from "../../img/jet.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name">Jet Semrick</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Computer Science</div>
              <div className="i-title-item">Debate</div>
              <div className="i-title-item">Research</div>
              <div className="i-title-item">Economics</div>
            </div>
          </div>
          <p className="i-desc">
            I am student at the{" "}
            <span style={{ fontWeight: "bold" }}>University of Kansas </span>
            studying computer science and economics. This website has my
            projects and debate interests.
            {/* <span style={{ fontWeight: "bold" }}> Kansas City</span> and{" "} */}
            {/* <span style={{ fontWeight: "bold" }}>New York</span>. I am */}
          </p>
        </div>
      </div>
      <div className="i-right">
        {/* use bennetteely.com to use clip path */}
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;

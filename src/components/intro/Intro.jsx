import "./Intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
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
            projects, papers, and background.
          </p>
        </div>
      </div>
      <div className="i-right">
        {/* use bennetteely.com to use clip path */}
        <div className="i-bg"></div>
        {/* <img src={Me} alt="" className="i-img" /> */}
        <div className="i-nav">
          <div className="i-nav-item">
            <a href="https://twitter.com/jetsemrick">Twitter</a>
          </div>
          <div className="i-nav-item">
            <a href="https://www.linkedin.com/in/jetsemrick/">LinkedIn</a>
          </div>
          <div className="i-nav-item">
            <a href="https://github.com/jetsemr">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

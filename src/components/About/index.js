import NavLogo from "../../assets/images/nav-logo.png";
import "./index.scss";

const About = () => {
  return (
    <div className="about-page-container" id="about">
      <div className="left-side-container">
        <div className="img-container">
        <img src={NavLogo} alr="profile-photo" />
        </div>
      </div>
      <div className="right-side-container">
        <h3>Hi there!</h3>
        <p>
          I am Yuxi, an experienced tax accountant looking forward to becoming a
          software/web developer. The strong logical flow in coding sparked my
          interest in programming and to achieve my end goal, I have taken
          self-taught lessons as well as code courses provided by excellent
          institutions.
        </p>
        <br />
        <h4>Courses Taken</h4>
        <p>Java on Codecademy - Completed</p>
        <p>
          Javascript Development course on General Assembly - Completed
        </p>
        <p>
          Front End Development path on Codecademy - In progress, 80% complete
        </p>
     
        <br />
        <p>
          <strong>My tech skills: </strong>HTML, CSS, Javascript, Typescript, React, Java
        </p>
        <p>
          <strong>My soft skills: </strong>Fast learner, team-player, problem
          solver
        </p>
      </div>
    </div>
  );
};

export default About;

import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import BackgroundVideo from "../../assets/videos/background-video.mp4";
import { Loader } from "react-loaders";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";

const Homepage = () => {
  return (
    <div>
      <div className="home-page-container">
        <Loader
          className="loader"
          type="line-scale-pulse-out"
          color="#848586"
          width={500}
        />
        <div className="left-side-container">
          <div class="left-side-veil"></div>
          <div className="illustration-editor">
            <div className="code-blocks">
              <div className="code code-html">
                <header>
                  <FontAwesomeIcon icon={faGear} color="ffffff" />
                  <h1>HTML</h1>
                  <FontAwesomeIcon icon={faAngleDown} color="ffffff" />
                </header>
                <div className="code-content">
                  <code>
                    <span className="c-r">&lt;div</span>{" "}
                    <span className="c-y">className</span>
                    <span className="c-w">=</span>
                    <span className="c-g">"my-app"</span>
                    <span className="c-r">&gt;</span>
                    <br />
                    <span className="line-2">Hello, world! Welcome!</span>
                    <br />
                    <span className="c-r">&lt;/div&gt;</span>
                  </code>
                </div>
              </div>
              <div className="code code-css">
                <header>
                  <FontAwesomeIcon icon={faGear} color="ffffff" />
                  <h1>CSS</h1>
                  <FontAwesomeIcon icon={faAngleDown} color="ffffff" />
                </header>
                <div className="code-content">
                  <code>
                    <span className="c-y">.my-app</span> <span>{"{"}</span>
                    <br />
                    <span className="c-p line-2">background</span>
                    <span>:</span>
                    <span className="c-y">linear-gradient</span>
                    {"( "}
                    <br />
                    <span className="c-o line-3">-119deg</span>,{" "}
                    <span className="c-y">$gray</span>{" "}
                    <span className="c-o">0%</span>,<br />
                    <span className="c-y line-4">$dark-gray</span>
                    <span className="c-o">100%</span>
                    {");}"}
                  </code>
                </div>
              </div>
              <div className="code code-js">
                <header>
                  <FontAwesomeIcon icon={faGear} color="ffffff" />
                  <h1>JS</h1>
                </header>
                <div className="code-content">
                  <code>
                    <p className="line-1">
                      <span className="c-y">if</span>
                      {"( "}
                      <span className="c-y">brain</span> !=={" "}
                      <span className="c-y">empty</span> {") {"}
                      <br />
                    </p>
                    <p className="line-2">
                      <span className="c-b">keepCoding</span>
                      {"();"}
                      <br />
                    </p>
                    <p className="line-3">
                      {"} "}
                      <span className="c-y">else</span> {"{"}
                      <br />
                    </p>
                    <p className="line-4">
                      <span className="c-b">grabCoffee</span>
                      {"(); }"}
                    </p>
                  </code>
                </div>
              </div>
              <div className="editor-block"></div>
            </div>
          </div>
        </div>

        <div className="right-side-container">
          <div class="right-side-veil"></div>
          <div className="title">
            <h1>Yuxi Shi</h1>
            <h2>Front End Dev</h2>
          </div>
        </div>
      </div>
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Homepage;

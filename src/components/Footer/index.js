import "./index.scss";
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li key="linkedIn">
          <a target="_blank" rel="noreferer" href="http://linkedin.com/in/yuxi-shi-072b3574">
            <FontAwesomeIcon icon={faLinkedin} color="#ffffff" />
          </a>
        </li>
        <li key="github">
          <a target="_blank" rel="noreferer" href="http://github.com/CissyStar">
            <FontAwesomeIcon icon={faGithub} color="#ffffff" />
          </a>
        </li>
        <li key="facebook">
          <a target="_blank" rel="noreferer" href="http://codepen.io/YUXISHI">
            <FontAwesomeIcon icon={faCodepen} color="#ffffff" />
          </a>
        </li>
        <li key="twitter">
          <a target="_blank" rel="noreferer" href="https://leetcode.com/CissyStar/">
          <FontAwesomeIcon icon={faLaptopCode} color="#ffffff" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

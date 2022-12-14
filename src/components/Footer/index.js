import "./index.scss";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li key="linkedIn">
          <a target="_blank" rel="noreferer" href="http://linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} color="#ffffff" />
          </a>
        </li>
        <li key="instagram">
          <a target="_blank" rel="noreferer" href="http://instagram.com">
            <FontAwesomeIcon icon={faInstagram} color="#ffffff" />
          </a>
        </li>
        <li key="facebook">
          <a target="_blank" rel="noreferer" href="http://facebook.com">
            <FontAwesomeIcon icon={faFacebook} color="#ffffff" />
          </a>
        </li>
        <li key="twitter">
          <a target="_blank" rel="noreferer" href="http://twitter.com">
            <FontAwesomeIcon icon={faTwitter} color="#ffffff" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

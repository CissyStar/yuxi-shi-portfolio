
import ContactForm from "../../components/ContactForm";
import Map from "../../components/Map";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons"; 
const Contact = () => {
  return (
    <div className="contact-page-container" id="contact">
        <div className="left-side-container">
          <h1>
            Contact Me
          </h1>
          <p>0424 942 112</p>
          <p>yxshi89@gmail.com</p>
          <ContactForm />
        </div>
        <div class="right-side-container">
          <div className="map-info">
            <p>Located in Mount Waverley</p>
            <p>
              <strong>Melbourne</strong>
              <FontAwesomeIcon icon={faCloudRain} color="#c2847a" />
            </p>
          </div>
          <Map />
        </div>
      </div>

  );
};

export default Contact;

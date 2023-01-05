import ContactForm from "../../components/ContactForm";
import Map from "../../components/Map";
import "./index.scss";

const Contact = () => {
  return (
    <div className="contact-page-container" id="contact">
      <div className="left-side-container">
        <h1>Contact Me</h1>
        <p>0424 942 112</p>
        <p>Cissy8812221@gmail.com</p>
        <ContactForm />
      </div>
      <div className="right-side-container">
        <div className="container">
          <div className="map-info">
            <p>Located in Mount Waverley</p>
            <p>
              <strong>Melbourne</strong>
            </p>
          </div>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;

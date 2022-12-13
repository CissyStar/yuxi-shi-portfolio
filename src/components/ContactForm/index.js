import { useState } from "react";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="contact-form">
      {!isSent ? (
        <form>
          <div className="form-row">
            <input type="text" name="name" placeholder="Name"></input>
            <input type="email" name="email" placeholder="Email"></input>
          </div>
          <div className="form-row">
            <textarea name="message" placeholder="Message"></textarea>
          </div>
          <div className="form-row">
            <input
              type="submit"
              onClick={handleSubmit}
              className="form-submit"
              value="Send"
            ></input>
          </div>
        </form>
      ) : (
        <div>
          <br />
          <p>
            Thanks for getting in touch. Your message has been sent to Yuxi!
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef([]);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      form.current[0].value &&
      form.current[1].value &&
      form.current[2].value
    ) {
      emailjs
        .sendForm(
          "service_egxbdjk",
          "template_thnjcx8",
          form.current,
          "_RGegon5BTP8qalAN"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSent(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    }
  };

  return (
    <div className="contact-form">
      {!isSent ? (
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-row">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
       
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Email"
         
            ></input>
          </div>
          <div className="form-row">
            <textarea
              name="message"
              placeholder="Message"
       
            ></textarea>
          </div>
          <div className="form-row">
            <input type="submit" className="form-submit" value="Send"></input>
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

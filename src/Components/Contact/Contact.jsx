import React from "react";
import "./Contact.css";
import msg from '../../assets/msg_icon.svg'
import mail from '../../assets/mail_icon.svg'
import phone from '../../assets/phone_icon.svg'
import location from '../../assets/location_icon.svg'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "6c80acae-e1eb-4359-9dd7-3a9df62553c3");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg} alt="" /></h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback,questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
            <li><img src={mail} alt="" />Contact@Shishir.dev</li>
            <li><img src={phone} alt="" />9840484991</li>
            <li><img src={location} alt="" />5678 Harisiddhi Road <br />Lalitpur, Bagmati Province </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder="Enter your name" required/>
            <label>Phone number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required />
            <label>Write your message here</label>
            <textarea name="message" rows="5" placeholder="Enter your message"></textarea>
            <button type="submit" className="btn dark-btn">Submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;

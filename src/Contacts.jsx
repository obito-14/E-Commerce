import { useAuth0 } from "@auth0/auth0-react";
import "./Contact.css";

const Contacts = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="ContactContainer">
      <h2 className="ContactHead">Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61154.32139001928!2d74.12839062167969!3d16.669621599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000afdfba3cd%3A0x13e9d51c2cbf6a4f!2sGold%20Mall!5e0!3m2!1sen!2sin!4v1692167539848!5m2!1sen!2sin"
        width="100%"
        height="350px"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="ContactBox">
        <form action="https://formspree.io/f/xvojkyvp" method="POST">
          <input
            type="text"
            placeholder="UserName"
            className="Input1"
            required={true}
            value={isAuthenticated ? user.name : ""}
            name="UserName"
            autoComplete="off"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="Input1"
            value={isAuthenticated ? user.email : ""}
            required={true}
            autoComplete="off"
          />
          <textarea
            name="Message"
            cols={10}
            rows={8}
            placeholder="Enter Your Message"
            className="ContactArea"
            required={true}
            autoComplete="off"
          />
          <input type="Submit" className="ContactBtn" />
        </form>
      </div>
    </div>
  );
};

export default Contacts;

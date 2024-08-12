import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = ({ contact }) => {
  const navigate = useNavigate();


  function handleContactSelect() {
    navigate("/chat/" + contact.id);
  }

  return (
    <section className="contact-container" onClick={handleContactSelect} style={{ backgroundColor: contact.backgroundColor }}>
      <div className="imageContainer">
        <img
          className="profile-picture"
          src={"/images/" + contact.profilePicture}
        />
      </div>
      <div className="contact-info">
        <div className="header-info">
          <span> <b>{contact.name}</b></span>
          <div> {contact.chatHistory[contact.chatHistory.length - 1].date} </div>
        </div>
        <p>{contact.chatHistory[contact.chatHistory.length - 1].content}</p>
      </div>
    </section>
  );
};

export default Contact;
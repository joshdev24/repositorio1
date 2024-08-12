import React from "react";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import { getContactInfoById } from "../../../helpers/getContactInfoById";
import "./ContactInfo.css";

const ContactInfo = () => {
  const params = useParams();

  const contactData = getContactInfoById(params.id_contacto);


  return (
    <div className="contact-info-container">
      <Header contactData={contactData} backURL={`/chat/${contactData.id}`} />
      <div className="contact-info-data" style={{ backgroundColor: contactData.color }}>


        <div className="profile-pic">
          <img
            src={`/images/${contactData.profilePicture}`}
          />
        </div>
        <div className="contact-name">
          <span>{contactData.name}</span>
        </div>
        <div className="status">
          <span><i> {contactData.status} </i></span>
        </div>
        <div className="bottom-icon" style={{ backgroundColor: contactData.backgroundColor }} >
          <button style={{ backgroundColor: contactData.color }}><i class="bi bi-star">    Mensajes Destacados </i></button>
          <button style={{ backgroundColor: contactData.color }}><i class="bi bi-bell">               Silenciar Notificaciones</i></button>
          <button style={{ backgroundColor: contactData.color }}><i class="bi bi-clock-history"></i>  Mensajes temporales</button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
import React, { useState, useEffect } from 'react';
import data from "../../../data.js";
import Contact from "../Contact/Contact.jsx";
const ContactList = ( ) => {
  const categoriasDisponibles = ['no', 'Pubertad'];
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('no');
  const [emocionesState, setEmocionesState] = useState(data);

  const handleChangeCategoria = (nuevoValor) => {
    setCategoriaSeleccionada(nuevoValor);
  };

  useEffect(() => {
    if (categoriaSeleccionada === '') {
      setEmocionesState(data);
    } else {
      setEmocionesState(data.filter(contact => contact.categoria === categoriaSeleccionada));
    }
  }, [categoriaSeleccionada, data]);

  return (
    <div className="contact-list-container">
      <div className="header">
        <span>WhatsApp</span>
        {categoriasDisponibles.map(categoria => (
          <button 
          className='btn'
            key={categoria}
            onClick={() => handleChangeCategoria(categoria)}
          >
            {categoria}
          </button>
        ))}
        <i className="bi bi-three-dots-vertical"></i>
      </div>

      <div className="contact-container2">
        {emocionesState.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </div>

      <div className="btm-cont">
        <i className="bi bi-telephone"></i>
        <i className="bi bi-chat-fill"></i>
        <i className="bi bi-gear-wide-connected"></i>
      </div>
    </div>
  );
};

export default ContactList;



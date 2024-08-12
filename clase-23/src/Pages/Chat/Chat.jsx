import React from "react";
import Chat from "../../Componets/whatsapp/Chat/Chat";
import { useParams } from "react-router-dom";
import { getContactInfoById } from "../../helpers/getContactInfoById";

const Chats = () => {
  const params = useParams();

  const chatInfo = getContactInfoById(params.id_contacto);


  return (
    <div>
      <Chat data={chatInfo} />
    </div>
  );
};

export default Chats;


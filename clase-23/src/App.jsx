import React from "react";
import { Routes, Route } from "react-router-dom";
import Contacts from "./Pages/Contact/Contact";
import Chat from "./Pages/Chat/Chat";
import ContactInfo from "./Pages/ContactInfo/ContactInfo"; // Ensure correct import

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/chat/:id_contacto" element={<Chat />} />
        <Route path="/info/:id_contacto" element={<ContactInfo />} />
      </Routes>
    </main>
  );
}

export default App;
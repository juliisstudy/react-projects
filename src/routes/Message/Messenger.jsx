import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div>
      <h3 className="center">Send a message</h3>
      <div className="contact-window">
      <ContactList 
        contacts={contacts}
        selectedContact={to}
        onSelect={(contacts) => setTo(contacts)}
      />
      <Chat key={to.email} contact={to} />
      </div>
    </div>
  );
}

const contacts = [
  { name: "Jojo", email: "jojo@mail.com" },
  { name: "peppa", email: "peppa@mail.com" },
  { name: "Yoyo", email: "yoyo@mail.com" },
];

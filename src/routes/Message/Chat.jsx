/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Chat({ contact }) {
  const [text, setText] = useState("");
  return (
    <section className="chat">
      <textarea rows="5" cols="50"
        value={text}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button> Send to {contact.email}</button>
    </section>
  );
}

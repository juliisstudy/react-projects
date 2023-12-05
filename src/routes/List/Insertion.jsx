import { useState } from "react";
import { initialOrder } from "./data.js";

let nextId = 0;

export default function Insertion() {
  const [name, setName] = useState("");
  const [orders, setOrders] = useState(initialOrder);

  function handleClick() {
    const insertAt = 1;
    const nextOrder = [
      ...orders.slice(0, insertAt),
      { id: nextId, name: name },
      ...orders.slice(insertAt),
    ];
    setOrders(nextOrder);
    setName("");
  }
  return (
    <div className="Form">
      <h3 className="center">Insert Into An array</h3>
      <br/>
      <div className="form-control">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}> Insert</button>
      </div>
      <ul className="list-group">
        {orders.map((order) => (
          <li className="list-group-item" key={order.id}>{order.name}</li>
        ))}
      </ul>
    </div>
  );
}

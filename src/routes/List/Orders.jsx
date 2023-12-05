import { useState } from "react";

export default function Orders() {
  const [name, setName] = useState("");
  const [orders, setOrders] = useState([]);
  let nextId = 0;

  return (
    <>
      <div className="Form">
        <h3 className="center">Add Orders</h3>
        <div className="form-control ">
         <input value={name} onChange={(e) => setName(e.target.value)} />
            <button 
          onClick={() => {
            orders.push({
              id: nextId++,
              name: name,
            });
          }}
        >
          Add
          </button>
        </div>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>{order.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

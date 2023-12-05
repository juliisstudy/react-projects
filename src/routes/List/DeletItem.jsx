import { useState } from "react";
import { initialOrder } from "./data.js";

export default function DeleteItem() {
  const [orders, setOrders] = useState(initialOrder);

  return (
    <div className="Form">
      <h3 className="center">Delete an Order</h3>      <br/>

      <ul className="list-group">
        {orders.map((order) => (
          <li className="list-group-item" key={order.id}>
            {order.name}
            <button
              onClick={() => {
                setOrders(orders.filter((a) => a.id !== order.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

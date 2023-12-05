/* eslint-disable react/prop-types */
import { useState } from "react";
import { initialOrder } from "./data";

export default function CheckList() {
  const [myList, setMyList] = useState(initialOrder);

  function handleToggleMyList(foodId, soldout) {
    setMyList(
      myList.map((food) => {
        if (food.id === foodId) {
          return { ...food, sold: soldout };
        } else {
          return food;
        }
      }),
    );
  }

  return (
    <div className="check-list">
      <h3>Check List</h3>
      <ItemList orders={myList} onToggle={handleToggleMyList} />
    </div>
  );
}

function ItemList({ orders, onToggle }) {
  return (
    <ul className="list-group">
      {orders.map((order) => (
        <li key={order.id} className="list-group-item">
          <label>
            <input
              type="checkbox"
              checked={order.sold}
              onChange={(e) => {
                onToggle(order.id, e.target.checked);
              }}
            />
            {order.name}
          </label>
        </li>
      ))}
    </ul>
  );
}

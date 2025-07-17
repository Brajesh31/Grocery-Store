import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, removeItemCompletely } from "../features/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between border rounded p-4 shadow-sm mb-2">
      <div className="flex items-center space-x-4">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
        <div>
          <h2 className="font-medium">{item.name}</h2>
          <p className="text-sm text-gray-600">₹{item.price} per unit</p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          –
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => dispatch(addToCart(item))}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      <div className="text-right">
        <p className="font-semibold">₹{item.price * item.quantity}</p>
        <button
          onClick={() => dispatch(removeItemCompletely(item.id))}
          className="text-sm text-red-500 hover:underline mt-1 block"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;

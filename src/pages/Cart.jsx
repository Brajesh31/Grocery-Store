import React, { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Update localStorage and state
  const updateCart = (items) => {
    localStorage.setItem("cart", JSON.stringify(items));
    setCartItems(items);
  };

  const increaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updated);
  };

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const grandTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded mb-4 shadow bg-white"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-500 text-sm">₹{item.price} each</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                >
                  –
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                >
                  +
                </button>
              </div>

              <div className="text-right">
                <p className="font-bold">₹{item.price * item.quantity}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6 border-t pt-4 text-xl font-bold">
            Total: ₹{grandTotal}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = stored.find((item) => item.id === product.id);

    let updatedCart;
    if (existing) {
      updatedCart = stored.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...stored, { ...product, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  return (
    <div className="bg-gradient-to-br from-white via-green-100 to-lime-200 hover:from-yellow-100 hover:to-orange-200 transition-all duration-700 p-6 rounded-lg shadow-md transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-contain mb-3 rounded bg-white p-2"
      />
      <h3 className="text-gray-800 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-700 mb-3 font-medium">₹{product.price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

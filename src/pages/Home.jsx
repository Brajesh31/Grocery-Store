import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

function Home() {
  const products = useSelector((state) => state.products.items);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;

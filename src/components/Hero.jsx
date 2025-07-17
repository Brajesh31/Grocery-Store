import React from "react";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-rose-100 to-yellow-100 py-8 md:py-10">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          Welcome to Your Grocery Store
        </h1>
        <p className="text-sm md:text-base text-gray-700">
          Fresh products. Great prices. Fast delivery.
        </p>
      </div>
    </section>
  );
}

export default Hero;

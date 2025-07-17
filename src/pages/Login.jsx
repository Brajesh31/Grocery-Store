import React from "react";

function Login() {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input type="email" placeholder="Email" className="w-full p-2 mb-3 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Login</button>
      </div>
    </div>
  );
}

export default Login;

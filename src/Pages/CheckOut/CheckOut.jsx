import React from "react";

const CheckOut = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-6 bg-white rounded-lg">
          <h1 className="text-red-800 font-semibold text-xl border-b border-t pt-4 border-slate-950 pb-4">
            NO ITEMS AVAILABLE!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

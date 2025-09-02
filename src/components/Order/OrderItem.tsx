/* eslint-disable @next/next/no-img-element */
import React from "react";

const OrderItem = () => {
  return (
    <div className="justify-between items-start bg-white border rounded-lg p-4">
      <div className="flex gap-3">
        <img
          src="/burger4.png"
          alt="Deluxe Sandwich"
          className="w-20 h-20 rounded-md object-cover bg-gradient-to-b from-[#803059]/30 via-[#803059]/90 to-transparent"
        />
        <div className=" flex flex-col justify-center">
          <h3 className="text-xl font-semibold">Deluxe Sandwich Combo Meal</h3>
          <p className="text-md text-gray-500">
            Nashville Crispy Fillet, Bacon Strips, Avocado Slices
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4 justify-between">
        {/* Qty buttons */}
        <div className="flex items-center gap-2">
          <button className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center text-lg">
            +
          </button>
          <span className="text-sm font-medium">2</span>
          <button className="bg-gray-100 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center text-lg">
            –
          </button>
          {/* Actions */}
          <button className="bg-gray-100 text-gray-700 text-sm px-3 h-8 rounded-md">
            ✏️ Customize
          </button>
          <button className="bg-gray-100 text-gray-700 text-sm px-3 h-8 rounded-md flex items-center gap-1">
            🗑 Remove
          </button>
        </div>
        <div>
          <p className="text-xl font-normal">210.000 IDR</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;

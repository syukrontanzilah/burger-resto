/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import BannerBurger from "@/components/Banner/BannerBurger";
import ModalCheckoutList from "@/components/Modal/ModalChekoutList";
import React, { useState } from "react";

const Breakfast = () => {
  const [activeTab, setActiveTab] = useState("Beef");

  const tabs = [
    { label: "All", value: "All" },
    { label: "🔥 Promo", value: "Promo" },
    { label: "Beef", value: "Beef" },
    { label: "Chicken", value: "Chicken" },
    { label: "Vegan", value: "Vegan" },
    { label: "Fish", value: "Fish" },
  ];
  return (
    <div className="font-sans">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4">Breakfast</h1>
      <p className="text-gray-500 text-sm mb-6">
        Breakfast is served until 12.00, get your favorites before they&apos;re
        gone!
      </p>

      {/* Banner */}
      <BannerBurger />

      {/* Tabs */}
      <div className="flex space-x-3 overflow-x-auto no-scrollbar mb-7 mt-7">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-1 rounded-md text-sm transition-colors cursor-pointer h-8
            ${
              activeTab === tab.value
                ? "bg-orange-500 text-white font-semibold"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Food List */}
      <div className="grid md:grid-cols-3 gap-4 mb-52">
        {/* Item 1 */}
        <div className="flex flex-col mb-2">
          <div className="relative bg-[#FCF7EF] rounded-2xl p-4 flex flex-col items-center">
            {/* Badge */}
            <div className="absolute top-3 -left-2">
              <div className="relative  bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-tr-md rounded-br-md rounded-tl-md">
                Best Seller
                <div className="absolute -bottom-2 left-0 w-0 h-0 border-l-[10px] border-r-[0px] border-t-[10px] border-l-transparent border-r-transparent border-t-orange-700"></div>
              </div>
            </div>
            <img
              src="/burger5.png"
              alt="Chicken Sandwich"
              className="w-40 h-40 object-contain"
            />
          </div>

          {/* description */}
          <p className="text-orange-600 font-semibold text-lg mt-3">
            39.000 IDR
          </p>
          <p className="text-base font-medium text-gray-900">
            Chicken Sandwich
          </p>
          <p className="text-sm text-gray-500">370 Cal</p>
        </div>

        {/* item 2 */}
        <div className="flex flex-col mb-2">
          <div className="relative bg-[#FCF7EF] rounded-2xl p-4 flex flex-col items-center">
            {/* Badge */}
            <div className="absolute top-3 -left-2">
              <div className="relative  bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-tr-md rounded-br-md rounded-tl-md">
                Better Value
                <div className="absolute -bottom-2 left-0 w-0 h-0 border-l-[10px] border-r-[0px] border-t-[10px] border-l-transparent border-r-transparent border-t-green-700"></div>
              </div>
            </div>
            <img
              src="/burger4.png"
              alt="Chicken Sandwich"
              className="w-40 h-40 object-contain"
            />
          </div>

          {/* description */}
          <p className="text-orange-600 font-semibold text-lg mt-3">
            54.000 IDR
          </p>
          <p className="text-base font-medium text-gray-900">Deluxe Sandwich</p>
          <p className="text-sm text-gray-500">370 Cal</p>
        </div>

        {/* Item 3  */}
        <div className="flex flex-col mb-2">
          <div className="relative bg-[#FCF7EF] rounded-2xl p-4 flex flex-col items-center">
            <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              2
            </div>
            <img
              src="/burger6.png"
              alt="Chicken Sandwich"
              className="w-40 h-40 object-contain"
            />
          </div>
          <p className="text-orange-600 font-semibold text-lg mt-3">
            54.000 IDR
          </p>
          <p className="text-base font-medium text-gray-900">Deluxe Sandwich</p>
          <p className="text-sm text-gray-500">370 Cal</p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col mb-2">
          <div className="relative bg-[#FCF7EF] rounded-2xl p-4 flex flex-col items-center">
            <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              1
            </div>
            <img
              src="/kidsmeal.png"
              alt="Grilled Nagets"
              className="w-40 h-40 object-contain"
            />
          </div>
          <p className="text-orange-600 font-semibold text-lg mt-3">
            34.000 IDR
          </p>
          <p className="text-base font-medium text-gray-900">Grilled Nuggets</p>
          <p className="text-sm text-gray-500">370 Cal</p>
        </div>

        {/* Item 5  */}
        <div className="flex flex-col mb-2">
          <div className="relative bg-[#FCF7EF] rounded-2xl p-4 flex flex-col items-center">
            <img
              src="/salads.png"
              alt="Salad"
              className="w-40 h-40 object-contain"
            />
          </div>
          <p className="text-orange-600 font-semibold text-lg mt-3">
            10.000 IDR
          </p>
          <p className="text-base font-medium text-gray-900">Salad</p>
          <p className="text-sm text-gray-500">370 Cal</p>
        </div>

        {/* Item 6  */}
        <div className="flex flex-col mb-2">
          <div className="relative bg-[#FCF7EF] rounded-2xl p-4 flex flex-col items-center">
            <img
              src="/sides.png"
              alt="Chicken Sandwich"
              className="w-40 h-40 object-contain"
            />
          </div>
          <p className="text-orange-600 font-semibold text-lg mt-3">
            14.000 IDR
          </p>
          <p className="text-base font-medium text-gray-900">Side Dessert</p>
          <p className="text-sm text-gray-500">370 Cal</p>
        </div>
      </div>
      <ModalCheckoutList />
    </div>
  );
};

export default Breakfast;

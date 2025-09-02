/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import BannerBurger from "@/components/Banner/BannerBurger";
import ModalCheckout from "@/components/Modal/ModalCheckout";
import HomeProduct from "@/components/ProductList/HomeProduct";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="font-sans">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-3">What would you like today?</h1>
        {/* Today’s specials */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Today’s specials</h2>

          <div className="grid md:grid-cols-2 gap-3">
            {/* Card 1 */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/specials.png"
                alt="Fresh from the garden"
                className="w-full h-100 object-cover"
              />
              {/* Overlay */}
              <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#803000]/90 via-[#803000]/60 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-5 text-white">
                <p className="text-sm opacity-80">
                  Cozy up with autumn specials
                </p>
                <h3 className="text-2xl font-bold leading-snug mb-4">
                  Fresh from the garden
                </h3>
                <button className="border border-white/10 text-white text-sm font-medium rounded-lg px-4 py-2 bg-white/10 hover:bg-white/20 w-fit transition">
                  Order now
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/specials2.png"
                alt="Fresh from the garden"
                className="w-full h-100 object-cover"
              />
              {/* Overlay*/}
              <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#803059]/90 via-[#803059]/60 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-5 text-white">
                <p className="text-sm opacity-80">
                  Cozy up with autumn specials
                </p>
                <h3 className="text-2xl font-bold leading-snug mb-4">
                  Fresh from the garden
                </h3>
                <button className="border border-white/10 text-white text-sm font-medium rounded-lg px-4 py-2 bg-white/10 hover:bg-white/20 w-fit transition">
                  Order now
                </button>
              </div>
            </div>
          </div>

          {/* Burger Banner */}
          <BannerBurger />

          {/* Menu scroll samping */}
          <div className="flex space-x-3 overflow-x-auto no-scrollbar mt-4">
            {/* Card 1 */}
            <div className="flex-shrink-0 min-w-[160px] sm:w-1/3 bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs font-medium flex items-center sm:flex-row flex-col">
              <div className="flex items-center justify-center">
                <img src="/salads.png" alt="" className="h-14" />
              </div>
              <p className="text-sm sm:ml-2 mt-2 sm:mt-0 text-center sm:text-left">
                Berry, Salad, Potato
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex-shrink-0 min-w-[160px] sm:w-1/3 bg-yellow-100 text-yellow-700 px-3 py-2 rounded-lg text-xs font-medium flex items-center sm:flex-row flex-col">
              <div className="flex items-center justify-center">
                <img src="/treats.png" alt="" className="h-14" />
              </div>
              <p className="text-sm sm:ml-2 mt-2 sm:mt-0 text-center sm:text-left">
                Lemonade, Ice Dream, ...
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex-shrink-0 min-w-[160px] sm:w-1/3 bg-red-100 text-red-700 px-3 py-2 rounded-lg text-xs font-medium flex items-center sm:flex-row flex-col">
              <div className="flex items-center justify-center">
                <img src="/beverages.png" alt="" className="h-14" />
              </div>
              <p className="text-sm sm:ml-2 mt-2 sm:mt-0 text-center sm:text-left">
                Dr Paper, Iced Tea
              </p>
            </div>
          </div>
        </div>

        {/* Recommendation product/menu*/}
        <div className="max-w-4xl mx-auto mt-6 mb-40">
          <h2 className="text-xl font-semibold mb-6">Recomendation</h2>
          <HomeProduct />
        </div>
      </div>
      <ModalCheckout />
    </>
  );
};

export default HomePage;

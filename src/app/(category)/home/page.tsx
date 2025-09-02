/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import BannerBurger from "@/components/Banner/BannerBurger";
import DrawerCheckoutList from "@/components/Modal/DrawerCheckoutList";
import HomeProduct from "@/components/ProductList/HomeProduct";
import { ScrollMenuHorizontal } from "@/components/ScrollMenu/ScrollMenuHorizontal";
import React, { useState } from "react";

const HomePage = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <div className="font-sans">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-3">What would you like today?</h1>
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
          <ScrollMenuHorizontal />
        </div>

        {/* Recommendation product/menu*/}
        <div className="max-w-4xl mx-auto mt-6 mb-40">
          <h2 className="text-xl font-semibold mb-6">Recomendation</h2>
          <HomeProduct onOpenDrawer={() => setOpenDrawer(true)} />
        </div>
      </div>
      {/* <ModalCheckout /> */}
      <DrawerCheckoutList open={openDrawer} onOpenChange={setOpenDrawer} />
    </>
  );
};

export default HomePage;

/* eslint-disable @next/next/no-img-element */
import React from "react";

const BannerBurger = () => {
  return (
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="/burger.png"
            alt="Vegan burger"
            className="w-full h-50 object-cover"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-900/70 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 text-white space-y-3 max-w-sm">
            <p className="text-sm">Vegan burger</p>
            <h3 className="text-2xl font-bold leading-snug">
              Taste like real chicken burger
            </h3>
            <button className="border border-white/10 text-white text-sm font-medium rounded-lg px-4 py-2 bg-white/10 hover:bg-white/20 w-fit transition">
              Order now
            </button>
          </div>
        </div>
  );
};

export default BannerBurger;

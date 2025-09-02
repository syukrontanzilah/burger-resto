/* eslint-disable @next/next/no-img-element */
import ModalReview from "@/components/Modal/ModalReview";
import OrderItem from "@/components/Order/OrderItem";
import React from "react";

const ReviewPage = () => {
  return (
    <div className=" bg-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b">
        <img src="/logo1.png" alt="Logo" className="h-14 mx-auto mt-2 mb-10" />
        <div className="flex items-center gap-2 ml-4">
          <span className="bg-orange-500 text-white text-md font-medium px-3 py-1 rounded-md">
            5 items
          </span>
          <h1 className="text-2xl font-semibold">Your order</h1>
        </div>
      </div>

      {/* content container */}
      <div className="p-6 mb-60">
        {/* Order items */}
        <div className="flex-1 p-4 space-y-7">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
      </div>

      {/* Fixed Total Payment Bar */}
        <ModalReview/>
    </div>
  );
};

export default ReviewPage;

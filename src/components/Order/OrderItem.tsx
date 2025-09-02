/* eslint-disable @next/next/no-img-element */
"use client"
import { Minus, Pencil, Plus, Trash2 } from "lucide-react";
import React from "react";

type OrderItemProps = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  quantity: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onEdit?: () => void;
  onRemove?: () => void;
};

const OrderItem: React.FC<OrderItemProps> = ({
  image,
  title,
  subtitle,
  description,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onEdit,
  onRemove,
}) => {
  return (
    <div className="justify-between items-start bg-white border rounded-lg p-4">
      <div className="flex gap-3">
        <div className="relative w-22 h-22 rounded-md overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9E6]/60 via-[#FFF9E6]/20 to-transparent" />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-700">{subtitle}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 justify-between flex-wrap md:flex-nowrap">
        {/* Qty buttons */}
        <div className="flex items-center gap-2">
          <button
            className="bg-primary/80 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg"
            onClick={onIncrease}
          >
            <Plus size={16} />
          </button>
          <span className="text-sm font-medium">{quantity}</span>
          <button
            className="bg-secondary text-primary/80 rounded-full w-8 h-8 flex items-center justify-center text-lg mr-4"
            onClick={onDecrease}
          >
            <Minus size={16} />
          </button>

          {/* Actions */}
          <button
            className="bg-gray-100 text-gray-600 text-sm px-3 h-8 rounded-md flex items-center gap-1"
            onClick={onEdit}
          >
            <Pencil size={16}  /> Customize
          </button>
          <button
            className="bg-gray-100 text-gray-600 text-sm px-3 h-8 rounded-md flex items-center gap-1"
            onClick={onRemove}
          >
            <Trash2 size={16} /> Remove
          </button>
        </div>
        <div>
          <p className="text-lg font-semibold">
            {price} IDR
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;

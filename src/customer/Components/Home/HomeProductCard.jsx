import React from "react";
import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product?._id || product?.id}`)}
      className="cursor-pointer transform hover:scale-105 transition-transform duration-300 flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[10rem] h-[13rem] md:w-[15rem] md:h-[16rem] mx-3"
    >
      <div className="h-[8rem] md:h-[11rem] w-[6rem] md:w-[9rem]">
        <img
          className="object-cover object-top w-full h-full rounded-t-lg"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-2 md:p-4">
        <h3 className="text-base md:text-lg font-medium text-gray-900">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-1 md:mt-2 text-xs md:text-sm text-gray-500">
          {product?.title}
        </p>
      </div>
    </div>
  );
};

export default HomeProductCard;

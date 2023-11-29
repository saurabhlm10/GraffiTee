"use client";
import React, { useState } from "react";

const images = [
  "../images/productImages/main.jpg",
  "../images/productImages/2.jpg",
  "../images/productImages/3.jpg",
  "../images/productImages/4.jpg",
  "../images/productImages/5.jpeg",
  "../images/productImages/6.jpg",
];

const ProductImageSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="w-full">
      <div className="grid place-items-center">
        <img
          className="object-contain w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
          src={images[activeImageIndex]}
          alt=""
        />
      </div>
      <div className="w-full flex justify-center gap-4 mt-4 sm:mt-8 flex-wrap">
        {images.map((image, i) => {
          return (
            <div
              key={i}
              className={` cursor-pointer flex-shrink-0 rounded-lg ${
                i === activeImageIndex && "bg-primary-200"
              }`}
            >
              <img
                src={image}
                className="object-contain w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                onClick={() => setActiveImageIndex(i)}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImageSection;

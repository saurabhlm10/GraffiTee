import MainDetailsSection from "@/components/MainDetailsSection";
import ProductImageSection from "@/components/ProductImageSection";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-8 lg:px-10 pt-4 sm:pt-6 md:pt-8 lg:pt-12">
      <div className="">
        <ProductImageSection />
      </div>
      <div className="w-1/2">
        <MainDetailsSection />
      </div>
    </div>
  );
};

export default page;

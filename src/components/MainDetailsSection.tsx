import { sampleProduct } from "@/samples/product";
import React from "react";

const MainDetailsSection = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">{sampleProduct.title}</h1>
      <p>{sampleProduct.shortDescription}</p>
    </div>
  );
};

export default MainDetailsSection;

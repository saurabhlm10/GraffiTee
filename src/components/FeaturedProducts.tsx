import Link from "next/link";
import React from "react";

const featuredProducts = [
  {
    _id: 1,
    title: "Tshirt 1",
    imageUrl: "./images/tshirt.jpeg",
  },
  {
    _id: 2,
    title: "Tshirt 1",
    imageUrl: "./images/tshirt.jpeg",
  },
  {
    _id: 3,
    title: "Tshirt 1",
    imageUrl: "./images/tshirt.jpeg",
  },
  {
    _id: 4,
    title: "Tshirt 1",
    imageUrl: "./images/tshirt.jpeg",
  },
  {
    _id: 5,
    title: "Tshirt 1",
    imageUrl: "./images/tshirt.jpeg",
  },
  {
    _id: 6,
    title: "Tshirt 1",
    imageUrl: "./images/tshirt.jpeg",
  },
  {
    _id: 7,
    title: "Tshirt 1",
    imageUrl: "./images/tshirt.jpeg",
  },
  {
    _id: 8,
    title: "Tshirt 1",
    imageUrl: "./images/tshirt.jpeg",
  },
];

const FeaturedProducts = () => {
  return (
    <div className="px-8 text-text-200">
      <h1 className="mt-4 text-4xl font-semibold text-center sm:text-left">
        Featured Products
      </h1>
      <div className=" py-12 flex flex-wrap justify-center  gap-8 ">
        {featuredProducts.length !== 0 &&
          featuredProducts.map((product, index) => (
            <Link
              href={"/product/" + product._id}
              key={index}
              className={`${
                index > 2 ? "hidden" : "flex"
              }  sm:flex flex-col gap-2 cursor-pointer transform scale-100 transition-all duration-500 hover:scale-110`}
            >
              <img
                src={product.imageUrl}
                height={250}
                width={250}
                className="rounded-3xl shadow-md shadow-slate-300 hover:shadow-slate-400"
                alt=""
              />
              <p className="ml-1 text-xl">{product.title}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

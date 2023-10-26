'use client'
import React, {
  useEffect,
  useState,
} from "react";

const page = () => {
  const [products, setProducts] =
    useState([]);
  useEffect(() => {
    fetchProds();
  }, []);

  const fetchProds = async () => {
    const response = await fetch(
      "https://dummyjson.com/products",
    );
    const product =
      await response.json();
    setProducts(product.products);
  };
  return <div>
    <h1 className="text-4xl">Listing</h1>
    <ul>
  {products.map((p: any) => {
    return <li>{p.title}</li>;
  })}
</ul></div>;
};

export default page;

import React from "react";
import data from "../dummydata/data";
import ProductCard from "./ProductCard";
const Products = () => {
  return (
    <div className="container">
      {data.map((product) => (
        <ProductCard
          img={product.img}
          name={product.name}
          price={product.price}
          key={product.id}
          id={product.id}
          
        />
      ))}
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;

          flex-wrap: wrap;
          padding: 0 60px;
        }
      `}</style>
    </div>
  );
};

export default Products;

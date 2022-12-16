import React from "react";

const Home = () => {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <h2>Best Selling products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["product1", "product2"].map((product) => {
          return (
            <div>
              <h3>{product}</h3>
              <p>Price: $100</p>
            </div>
          );
        })}
      </div>
      footer
    </>
  );
};

export default Home;

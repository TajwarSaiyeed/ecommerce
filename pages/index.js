import React from "react";
import {
  Product,
  HeroBanner,
  FooterBanner,
  Footer,
  Navbar,
  Layout,
  Cart,
} from "../components";

const Home = () => {
  return (
    <>
      <HeroBanner />
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
      <FooterBanner />
    </>
  );
};

export default Home;

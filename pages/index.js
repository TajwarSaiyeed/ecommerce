import React from "react";
import { client } from "../lib/client";
import {
  Product,
  HeroBanner,
  FooterBanner,
  Footer,
  Navbar,
  Layout,
  Cart,
} from "../components";

const Home = ({ products, banner }) => {
  return (
    <>
      <HeroBanner heroBanner={banner.length && banner[0]} />
      <div className="products-heading">
        <h2>Best Selling products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => {
          return (
            <div key={product._id}>
              <h3>{product?.name}</h3>
              <p>Price: $100</p>
            </div>
          );
        })}
      </div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerquery = '*[_type == "banner"]';
  const banner = await client.fetch(bannerquery);

  return {
    props: {
      products,
      banner,
    },
  };
};

export default Home;

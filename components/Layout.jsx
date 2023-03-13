import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100vw"
      }}
      className="layout"
    >
      <Head>
        <title>Abid Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

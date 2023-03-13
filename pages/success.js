import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";
import { runfireWorks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    // localStorage.clear();
    runfireWorks();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a
            className="email"
            href="mailto:rjabid36@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            rjabid36@gmail.com
          </a>
        </p>
        <Link href="/">
          <button className="btn" type="button" width="300px">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;

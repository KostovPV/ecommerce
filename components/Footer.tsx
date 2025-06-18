import React from "react";
import Container from "./Container";
import Image from "next/image";
import payment from "@/images/payment.png";

const Footer = () => {
  return (
    <div className="bg-lightBg text-sm">
      <Container className="py-5">
        <footer className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-500">
            Copyright © 2025{" "}
            <span className="text-darkBlue font-semibold"> Plan B Web services</span> all
            rights reserved.
          </p>
          <Image src={payment} alt="payment" className="w-64 object-cover" />
        </footer>
      </Container>
    </div>
  );
};

export default Footer;

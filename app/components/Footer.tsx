"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

// CARD IMAGES
import amexCard from "@/public/icons/amex.png";
import mastercard from "@/public/icons/mastercard.png";
import paypalCard from "@/public/icons/paypal.png";
import visaCard from "@/public/icons/visa.png";
import lock from "@/public/icons/lock.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black w-full text-white py-5">
      <div className="max-w-screen-xl mx-auto">
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-6 justify-center items-center">
            <h1 className="text-xl font-bold underline">About</h1>

            <div className="flex flex-col justify-center gap-1 items-center text-center">
              <p>Founded in 1886 Premium Caps devours other hat stores.</p>

              <div className="flex items-center justify-center gap-3">
                <Image src={amexCard} height={40} width={40} alt="amex" />
                <Image src={mastercard} height={40} width={40} alt="mastercard" />
                <Image src={paypalCard} height={40} width={40} alt="paypal" />
                <Image src={visaCard} height={40} width={40} alt="visa" />
              </div>
              <div className="flex items-center gap-1 justify-center">
                <Image src={lock} height={30} width={30} alt="secure payments" />
                <h3>Secure Online Payments</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-center items-center text-center">
            <h1 className="text-xl font-bold underline">Menu</h1>
            <div>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">Products</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
                <li>
                  <Link href="/">Tracking</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-center items-center text-center">
            <h1 className="text-xl font-bold  underline">Important</h1>
            <ul className="flex flex-col gap-1">
              <li>
                <Link href="/">Terms of Service</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Shipping Policy</Link>
              </li>
              <li>
                <Link href="/">Refund Policy</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 justify-center items-center text-center">
            <h1 className="text-xl font-bold underline">Contact</h1>
            <div>
              <h3>
                Address:<span> 145 State Street Raleigh, NC 27610</span>
              </h3>
              <h3>
                Phone:<span> 188-888-8888</span>
              </h3>
              <h3>
                Email:<span> sales@caps.com</span>
              </h3>
              <div className="flex gap-3 text-3xl items-center justify-center mt-2">
                <Facebook fontSize="inherit" />
                <Instagram fontSize="inherit" />
                <Twitter fontSize="inherit" />
                <YouTube fontSize="inherit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React from "react";
import Image from "next/image";

// CARD IMAGES
import amexCard from "@/public/icons/amex.png";
import mastercard from "@/public/icons/mastercard.png";
import paypalCard from "@/public/icons/paypal.png";
import visaCard from "@/public/icons/visa.png";
import lock from "@/public/icons/lock.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="bg-primary w-full">
      <div className="w-[92%] bg-inherit m-auto">
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-stretch gap-4 h-auto">
          <div className="flex flex-col gap-6 justify-center items-center h-[200px]">
            <h1 className="text-xl font-bold underline ">About</h1>

            <div className="flex flex-col justify-center gap-1 items-center text-center">
              <p>Founded in 1886 Premium Caps devours other hat stores.</p>

              <div className="flex items-center justify-center gap-3">
                <Image className="object-cover" src={amexCard} height={40} width={40} alt="amex" />
                <Image className="object-cover" src={mastercard} height={40} width={40} alt="mastercard" />
                <Image className="object-cover" src={paypalCard} height={40} width={40} alt="paypal" />
                <Image className="object-cover" src={visaCard} height={40} width={40} alt="visa" />
              </div>
              <div className="flex items-center gap-1 justify-center">
                <Image className="object-cover" src={lock} height={30} width={30} alt="secure payments" />
                <h3>Secure Online Payments</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-center items-center h-[200px]">
            <h1 className="text-xl font-bold underline">Menu</h1>
            <div>
              <ul className="flex flex-col gap-1">
                <a href="/">
                  <li>Home</li>
                </a>
                <a href="/">
                  <li>Products</li>
                </a>
                <a href="/">
                  <li>About</li>
                </a>
                <a href="/">
                  <li>Contact</li>
                </a>
                <a href="/">
                  <li>Tracking</li>
                </a>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-center items-center h-full">
            <h1 className="text-xl font-bold  underline">Important</h1>
            <ul className="flex flex-col gap-1">
              <a href="/">
                <li>Terms of Service</li>
              </a>
              <a href="/">
                <li>Privacy Policy</li>
              </a>
              <a href="/">
                <li>Shipping Policy</li>
              </a>
              <a href="/">
                <li>Refund Policy</li>
              </a>
              <a href="/">
                <li>Contact Us</li>
              </a>
            </ul>
          </div>

          <div className="flex flex-col gap-6 justify-center items-center h-full">
            <h1 className="text-xl font-bold underline">Contact</h1>
            <div>
              <h3>
                Address:<span>145 State Street Raleigh, NC 27610</span>
              </h3>
              <h3>
                Phone:<span>188-888-8888</span>
              </h3>
              <h3>
                Email:<span>sales@premiumcaps.com</span>
              </h3>
              <div>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <YouTubeIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

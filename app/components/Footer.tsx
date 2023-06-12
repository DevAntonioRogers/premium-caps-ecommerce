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
    <div className="grid grid-cols-4 items-center justify-items-center">
      <div className="flex flex-col gap-1 justify-center items-center text-center">
        <div>
          <h1 className="text-2xl font-bold italic text-primary">About</h1>
        </div>
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio consectetur adipisicing elit. Odio</p>
        </div>

        <div className="flex items-center gap-3">
          <Image className="object-cover" src={amexCard} height={40} width={40} alt="amex" />
          <Image className="object-cover" src={mastercard} height={40} width={40} alt="mastercard" />
          <Image className="object-cover" src={paypalCard} height={40} width={40} alt="paypal" />
          <Image className="object-cover" src={visaCard} height={40} width={40} alt="visa" />
        </div>
        <div className="flex items-center gap-1">
          <Image className="object-cover" src={lock} height={30} width={30} alt="secure payments" />
          <h3>Secure Online Payments</h3>
        </div>
      </div>

      <div className="flex flex-col gap-1 justify-center items-center">
        <h1 className="text-2xl font-bold italic text-primary">Menu</h1>
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

      <div className="flex flex-col gap-1 justify-center items-center">
        <h1 className="text-2xl font-bold italic text-primary">Important</h1>
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

      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-2xl font-bold italic text-primary">Contact</h1>
      </div>
    </div>
  );
};

export default Footer;

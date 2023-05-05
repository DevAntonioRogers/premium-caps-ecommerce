"use client";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ICONS
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = ({ user }: Session) => {
  const [userMenu, setUserMenu] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const menuLinks = [
    { href: "#", name: "Home" },
    { href: "#", name: "Products" },
    { href: "#", name: "About" },
    { href: "#", name: "Contact" },
    { href: "#", name: "Tracking" },
  ];

  return (
    <nav className="flex justify-between items-center py-[1.1rem] px-4">
      <Link className="focus:outline-primary" href={"/"}>
        <h1 className="text-2xl font-bold text-primary italic">PREMIUM CAPS</h1>
      </Link>
      <ul className="md:flex gap-8 text-gray-600 hidden md:block absolute md:static bg-white top-12 right-5 p-5 z-10">
        <li>
          <a href="#" className="focus:outline-primary">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="focus:outline-primary">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="focus:outline-primary">
            About
          </a>
        </li>
        <li>
          <a href="#" className="focus:outline-primary">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="focus:outline-primary">
            Tracking
          </a>
        </li>
      </ul>

      {/* MOBILE MENU ICONS */}
      <div className="md:hidden flex gap-4" onClick={() => setOpenMobileMenu(!openMobileMenu)}>
        <PersonIcon />
        {openMobileMenu ? <CloseIcon /> : <MenuIcon />}
      </div>

      {/* MOBILE MENU */}
      {openMobileMenu && (
        <nav className=" md:hidden z-10 flex flex-col gap-4 p-4 bg-white absolute w-full top-16 left-0 shadow-lg">
          {menuLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>
      )}

      <div className="hidden md:block">
        {!user && (
          <div className="flex gap-4 items-center">
            <Link href={"./api/auth/signin"}>
              <button className="bg-primary py-1 px-4 rounded-md text-white">Log In</button>
            </Link>
            <Link href={"./api/auth/signin"}>
              <button className="bg-secondary py-1 px-4 rounded-md text-white">Sign Up</button>
            </Link>
          </div>
        )}

        {user && (
          <div className="flex items-center gap-6">
            <div className="text-gray-600 flex items-center gap-6 [&>*:nth-child(2)]:text-red-600 cursor-pointer">
              <ShoppingCartIcon />
              <FavoriteIcon />
            </div>
            <Image
              src={user?.image as string}
              alt={user.name as string}
              width={45}
              height={45}
              onClick={() => setUserMenu(!userMenu)}
              className="rounded-full cursor-pointer outline outline-primary"
              tabIndex={0}
            />

            {userMenu && (
              <ul className="z-10 absolute right-12 top-20 w-48 bg-white shadow-md rounded-md p-4">
                <Link href={"./api/auth/signout"}>
                  <li>Sign Out</li>
                </Link>
                <li>Favorites</li>
                <li>Profile</li>
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

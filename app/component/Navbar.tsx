"use client";

import { useState } from "react";
import { Session } from "next-auth";
import { useCartStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";

// ICONS
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Navbar = ({ user }: Session) => {
  const [userMenu, setUserMenu] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const cartStore = useCartStore();

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
        <h1 className="text-2xl font-bold text-primary italic whitespace-nowrap">PREMIUM CAPS</h1>
      </Link>
      {/* DESKTOP MENU */}
      <ul className="md:flex gap-8 text-gray-600 hidden md:visible absolute md:static bg-white top-12 right-5 p-5 z-10">
        {menuLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
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
            <div className="text-gray-600 flex items-center gap-6 cursor-pointer">
              <div onClick={() => cartStore.toggleCart()} className="relative">
                <ShoppingBagOutlinedIcon />
                {cartStore.cart.length > 0 && (
                  <span className="bg-primary text-white text-sm font-bold w-4 h-4 rounded-full absolute left-2 bottom-3 flex items-center justify-center">
                    {cartStore.cart.length}
                  </span>
                )}
              </div>
              <div>
                <FavoriteIcon />
              </div>
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
      {/* DESKTOP MENU END */}

      {/* MOBILE MENU ICONS */}
      <div className="flex gap-4 md:hidden">
        <div className="text-gray-600">
          <ShoppingBagOutlinedIcon />
        </div>
        {user && (
          <div className="text-gray-600">
            <FavoriteIcon />
          </div>
        )}
        <div className="md:hidden" onClick={() => setOpenMobileMenu(!openMobileMenu)}>
          {openMobileMenu ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {openMobileMenu && (
        <nav className=" md:hidden z-10 flex flex-col gap-4 p-4 bg-white absolute w-full top-16 left-0 shadow-lg">
          {menuLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
          {user && (
            <>
              <div className="flex items-center gap-4">
                <Image
                  src={user?.image as string}
                  alt={user?.name as string}
                  width={45}
                  height={45}
                  onClick={() => setUserMenu(!userMenu)}
                  className="rounded-full cursor-pointer outline outline-primary"
                  tabIndex={0}
                />
                <div className="flex gap-2">
                  <Link href={"./api/auth/signout"}>Wishlist</Link>
                  <Link href={"./api/auth/signout"}>Profile</Link>
                  <Link href={"./api/auth/signout"}>Sign Out</Link>
                </div>
              </div>
            </>
          )}
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
        </nav>
      )}
      {/* MOBILE MENU END */}

      {/* CART WHEN ICON IS CLICKED */}
      {!cartStore.isOpen && <Cart />}
    </nav>
  );
};

export default Navbar;

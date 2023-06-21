"use client";

import { useState, useEffect } from "react";
import { Session } from "next-auth";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { motion, AnimatePresence } from "framer-motion";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";

// ICONS
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import WishList from "./Wishlist";

const Navbar = ({ user }: Session) => {
  const [userMenu, setUserMenu] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cartStore = useCartStore();
  const wishlistStore = useWishlistStore();

  const menuLinks = [
    { href: "#", name: "Home" },
    { href: "#", name: "Products" },
    { href: "#", name: "About" },
    { href: "#", name: "Contact" },
    { href: "#", name: "Tracking" },
  ];

  return (
    <nav
      className={
        scrolling
          ? "bg-black w-full sticky top-0 z-[999] transition-all"
          : "bg-white w-full sticky top-0 z-[999] transition-all"
      }
    >
      <div className="flex justify-between items-center py-[0.3rem] bg-inherit w-[92%] m-auto lg:max-w-[1500px]">
        <Link className="focus:outline-primary" href={"/"}>
          <h1 className="text-2xl font-bold text-primary italic whitespace-nowrap">PREMIUM CAPS</h1>
        </Link>
        {/* DESKTOP MENU */}
        <ul
          className={
            scrolling
              ? "md:flex gap-8  hidden md:visible absolute md:static bg-black top-12 right-5 p-5 z-10 text-white transition-all"
              : "md:flex gap-8  hidden md:visible absolute md:static bg-white top-12 right-5 p-5 z-10 text-gray-600 transition-all"
          }
        >
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
            <div className="flex items-center lg:gap-6 gap-3">
              <div className="text-gray-600 flex items-center lg:gap-6 gap-3 cursor-pointer">
                <div onClick={() => cartStore.toggleCart()} className="relative">
                  <ShoppingBagOutlinedIcon />
                  <AnimatePresence>
                    {cartStore.cart.length > 0 && (
                      <motion.span
                        animate={{ scale: 1 }}
                        initial={{ scale: 0 }}
                        className="bg-primary text-white text-sm font-bold w-5 h-5 rounded-full absolute left-2 bottom-3 flex items-center justify-center"
                      >
                        {cartStore.cart.length}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <div onClick={() => wishlistStore.toggleWishList()}>
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
                <ul className="z-10 absolute right-12 top-16 w-48 bg-white shadow-md rounded-md p-4">
                  <li>Favorites</li>
                  <Link href={"./Dashboard"}>
                    <li>Profile</li>
                  </Link>
                  <li className="cursor-pointer" onClick={() => signOut()}>
                    Sign Out
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
        {/* DESKTOP MENU END */}

        {/* MOBILE MENU ICONS */}
        <div className="flex gap-4 md:hidden">
          <div className="text-gray-600 relative" onClick={() => cartStore.toggleCart()}>
            <ShoppingBagOutlinedIcon />
            <AnimatePresence>
              {cartStore.cart.length > 0 && (
                <motion.span
                  animate={{ scale: 1 }}
                  initial={{ scale: 0 }}
                  className="bg-primary text-white text-sm font-bold w-4 h-4 rounded-full absolute left-2 bottom-3 flex items-center justify-center"
                >
                  {cartStore.cart.length}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {user && (
            <div onClick={() => wishlistStore.toggleWishList()} className="text-gray-600">
              <FavoriteIcon />
            </div>
          )}
          <div className="md:hidden" onClick={() => setOpenMobileMenu(!openMobileMenu)}>
            {openMobileMenu ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>

        {/* MOBILE MENU */}
        {openMobileMenu && (
          <nav className=" md:hidden z-10 flex flex-col gap-4 p-4 bg-white absolute w-full top-10 left-0 shadow-lg">
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
        <AnimatePresence>{!cartStore.isOpen && <Cart />}</AnimatePresence>

        {/* WISHLIST WHEN ICON IS CLICK */}
        {!wishlistStore.openWishlist && <WishList user={user} />}
      </div>
    </nav>
  );
};

export default Navbar;

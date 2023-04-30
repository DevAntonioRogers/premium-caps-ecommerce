"use client";

import { Session } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Navbar = ({ user }: Session) => {
  const [userMenu, setUserMenu] = useState(false);
  return (
    <nav className="flex justify-between items-center p-8">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold text-primary italic">PREMIUM CAPS</h1>
      </Link>
      <ul className="flex gap-8 text-gray-600">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
        <li>Tracking</li>
      </ul>

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
            src={user.image}
            alt={user.name}
            width={45}
            height={45}
            onClick={() => setUserMenu(!userMenu)}
            className="rounded-full cursor-pointer outline outline-primary"
          />

          {userMenu && (
            <ul className="absolute right-12 top-20 w-48 bg-white shadow-md rounded-md p-4">
              <Link href={"./api/auth/signout"}>
                <li>Sign Out</li>
              </Link>
              <li>Favorites</li>
              <li>Profile</li>
            </ul>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

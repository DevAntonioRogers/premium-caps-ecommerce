"use client";

import { Session } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ user }: Session) => {
  return (
    <nav className="flex justify-between items-center">
      <Link href={"/"}>
        <h1>Premium Caps</h1>
      </Link>

      {!user && (
        <Link href={"./api/auth/signin"}>
          <button className="bg-teal-300 p-2 rounded-md text-white">Sign In</button>
        </Link>
      )}

      {user && <Image src={user.image} alt={user.name} width={40} height={40} className="rounded-full" />}
    </nav>
  );
};

export default Navbar;

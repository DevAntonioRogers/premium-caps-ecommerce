"use client";
import { Session } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const Navbar = ({ user }: Session) => {
  const active = useSelectedLayoutSegment();
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
        <div className="flex gap-4">
          <Link href={"./api/auth/signin"}>
            <button className="bg-primary py-1 px-4 rounded-md text-white">Log In</button>
          </Link>
          <Link href={"./api/auth/signin"}>
            <button className="bg-gray-600 py-1 px-4 rounded-md text-white">Sign Up</button>
          </Link>
        </div>
      )}

      {user && <Image src={user.image} alt={user.name} width={40} height={40} className="rounded-full" />}
    </nav>
  );
};

export default Navbar;

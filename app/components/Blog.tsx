"use client";
import Image from "next/image";
import blog1 from "@/public/blog1.jpg";
import blog2 from "@/public/blog2.jpg";
import blog3 from "@/public/blog3.jpg";

const Blog = () => {
  return (
    <div className="w-full">
      <div className="w-[92%] m-auto py-5">
        <h1 className="text-2xl text-center font-medium mb-5">From Our Blog</h1>
        <div className="grid gap-4 justify-items-center  grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <article className="flex flex-col">
            <Image src={blog2} alt="fashion" width={350} height={350} className="rounded-md cursor-pointer" />
            <div className="flex flex-col gap-2">
              <h2 className="text-gray-400 cursor-pointer hover:text-primary">June 22, 2023 | 4 Comments</h2>
              <h1 className="text-3xl font-bold cursor-pointer">Daily Fashion 😎</h1>
              <h3 className="text-primary cursor-pointer hover:text-black">Start Reading &rarr;</h3>
            </div>
          </article>

          <article className="flex flex-col">
            <Image src={blog1} alt="fashion" width={350} height={350} className="rounded-md cursor-pointer" />
            <div className="flex flex-col gap-2">
              <h2 className="text-gray-400 cursor-pointer hover:text-primary">April 22, 2023 | 20 Comments</h2>
              <h1 className="text-3xl font-bold cursor-pointer">Cap Season is Here ☀️</h1>
              <h3 className="text-primary cursor-pointer hover:text-black">Start Reading &rarr;</h3>
            </div>
          </article>

          <article className="flex flex-col">
            <Image src={blog3} alt="fashion" width={350} height={350} className="rounded-md cursor-pointer" />
            <div className="flex flex-col gap-2">
              <h2 className="text-gray-400 cursor-pointer hover:text-primary">July 8, 2023 | 15 Comments</h2>
              <h1 className="text-3xl font-bold cursor-pointer">Know What to Buy 💯</h1>
              <h3 className="text-primary cursor-pointer hover:text-black">Start Reading &rarr;</h3>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;

import { FetchProducts } from "@/utils/FetchProducts";
import Product from "./Product";
import AddToCartButton from "../UI/AddToCartButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import AddtoWishlistButton from "../UI/AddToWishlistButton";

const Sale = async () => {
  const products = await FetchProducts();
  const session = await getServerSession(authOptions);
  const menProducts = products.filter((product) => product.metadata.sale === "true");

  return (
    <div className="w-full my-10">
      <div className="w-[92%] m-auto lg:max-w-[1500px]">
        <h1 className="text-center text-2xl font-bold mb-5 ">Shop Sale</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {menProducts.map((product) => (
            <div
              key={product.id}
              className="bg-background shadow-lg flex flex-col items-center justify-center rounded-md relative"
            >
              <span className="absolute left-5 top-5 bg-black text-white px-3 rounded-lg uppercase">Sale</span>
              <Product {...product} />
              <div className="flex md:mt-0 mt-2 gap-1 lg:gap-3 flex-col md:flex-row flex-wrap justify-center">
                <AddToCartButton {...product} user={session?.user} />
                <AddtoWishlistButton {...product} user={session?.user} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sale;

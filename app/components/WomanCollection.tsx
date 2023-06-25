import { FetchProducts } from "@/utils/FetchProducts";
import Product from "./Product";
import AddToCartButton from "../UI/AddToCartButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import AddtoWishlistButton from "../UI/AddToWishlistButton";

const WomanCollection = async () => {
  const products = await FetchProducts();
  const session = await getServerSession(authOptions);
  const womenProducts = products.filter((product) => product.metadata.collection === "women");

  return (
    <div className="w-full my-10">
      <div className="w-[92%] m-auto lg:max-w-[1500px]">
        <h1 className="text-center text-2xl font-bold mb-5">Women Collection</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {womenProducts.map((product) => (
            <div
              key={product.id}
              className="bg-background shadow-lg flex flex-col items-center justify-center rounded-md "
            >
              <Product {...product} />
              <div className="flex  md:mt-0 mt-2 gap-1 md:gap-3 flex-col md:flex-row">
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

export default WomanCollection;

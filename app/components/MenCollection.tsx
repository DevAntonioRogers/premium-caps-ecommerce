import { FetchProducts } from "@/utils/FetchProducts";
import Product from "./Product";

const MenCollection = async () => {
  const products = await FetchProducts();
  const menProducts = products.filter((product) => product.metadata.collection === "men");

  return (
    <div className="w-full my-5">
      <div className="w-[92%] m-auto">
        <h1 className="text-center text-2xl font-bold text-primary underline ">Shop Mens</h1>
        <div className="flex justify-between w-[92%] m-auto flex-wrap">
          {menProducts.map((product) => (
            <div key={product.id}>
              <Product {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenCollection;

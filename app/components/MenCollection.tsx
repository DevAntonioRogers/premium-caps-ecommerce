import { FetchProducts } from "@/utils/FetchProducts";
import Product from "./Product";

const MenCollection = async () => {
  const products = await FetchProducts();
  const menProducts = products.filter((product) => product.metadata.collection === "men");

  return (
    <>
      {menProducts.map((product) => (
        <div key={product.id}>
          <Product {...product} />
        </div>
      ))}
    </>
  );
};

export default MenCollection;

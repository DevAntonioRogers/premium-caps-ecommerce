import Image from "next/image";
import { ProductType } from "@/Types/ProductTypes";

const Product = ({ name, image, unit_amount, id, description }: ProductType) => {
  return (
    <div>
      <Image src={image} alt={name} width={200} height={200} />
      <h1>{name}</h1>
    </div>
  );
};

export default Product;

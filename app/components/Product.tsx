import Image from "next/image";
import { ProductType } from "@/Types/ProductTypes";
import formatPrice from "@/utils/PriceFormat";
import Link from "next/link";

const Product = ({ name, image, unit_amount, id, description }: ProductType) => {
  return (
    <Link href={{ pathname: `/product/${id}`, query: { name, image, unit_amount, id, description } }}>
      <div>
        <Image src={image} alt={name} width={200} height={200} />
        <h1>{name}</h1>
        <h2>{unit_amount && formatPrice(unit_amount)}</h2>
      </div>
    </Link>
  );
};

export default Product;

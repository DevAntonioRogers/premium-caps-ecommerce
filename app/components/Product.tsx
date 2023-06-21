import Image from "next/image";
import { ProductType } from "@/Types/ProductTypes";
import formatPrice from "@/utils/PriceFormat";
import Link from "next/link";
import AddToCartButton from "../UI/AddToCartButton";
import AddtoWishlistButton from "../UI/AddToWishlistButton";

const Product = ({ name, image, unit_amount, id, description }: ProductType) => {
  return (
    <div>
      <Link href={{ pathname: `/product/${id}`, query: { name, image, unit_amount, id, description } }}>
        <Image src={image} alt={name} width={200} height={200} />
        <h1>{name}</h1>
      </Link>
      <h2>{unit_amount && formatPrice(unit_amount)}</h2>
      <div className="flex gap-4">
        <AddToCartButton /> <AddtoWishlistButton />
      </div>
    </div>
  );
};

export default Product;

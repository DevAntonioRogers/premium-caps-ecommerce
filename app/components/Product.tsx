import Image from "next/image";
import { ProductType } from "@/Types/ProductTypes";
import formatPrice from "@/utils/PriceFormat";
import Link from "next/link";
import AddToCartButton from "../UI/AddToCartButton";
import AddtoWishlistButton from "../UI/AddToWishlistButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import { FetchProducts } from "@/utils/FetchProducts";

const Product = ({ name, image, unit_amount, id, description, user }: ProductType) => {
  return (
    <>
      <Link href={{ pathname: `/product/${id}`, query: { name, image, unit_amount, id, description } }}>
        <Image src={image} alt={name} width={225} height={200} />
        <h1 className="text-center font-medium">{name}</h1>
      </Link>
      <h2 className="font-medium">{unit_amount && formatPrice(unit_amount)}</h2>
    </>
  );
};

export default Product;

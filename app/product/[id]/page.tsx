import Image from "next/image";
import { SearchParamTypes } from "@/Types/SearchParamsTypes";
import formatPrice from "@/utils/PriceFormat";
import AddToCartButton from "@/app/UI/AddToCartButton";

export default async function Product({ searchParams }: SearchParamTypes) {
  return (
    <div className="flex flex-col 2xl:flex-row items-center justify-between gap-16 ">
      <Image src={searchParams.image} alt={searchParams.name} width={400} height={400} priority={true} />

      <div className="font-medium ">
        <h1 className="text-2xl  py-2">{searchParams.name}</h1>
        <p className="py-2">{searchParams.description}</p>
        <div className="flex gap-2">
          <p className="font-bold text-primary">{searchParams.unit_amount && formatPrice(searchParams.unit_amount)}</p>
        </div>
        <AddToCartButton />
      </div>
    </div>
  );
}

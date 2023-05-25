"use client";
import { useCartStore } from "@/store/useCartStore";
import { ProductType } from "@/Types/ProductTypes";

const AddToCartButton = ({ id, image, unit_amount, quantity, name }: ProductType) => {
  const cartStore = useCartStore();

  return (
    <>
      <button onClick={() => cartStore.addToCart({ id, image, unit_amount, quantity, name })}>Add to Cart</button>
    </>
  );
};

export default AddToCartButton;

"use client";
import { useCartStore } from "@/store";

const AddToCartButton = ({ id, image, unit_amount, quantity, name }) => {
  const cartStore = useCartStore();

  return (
    <>
      <button onClick={() => cartStore.addToCart({ id, image, unit_amount, quantity, name })}>Add to Cart</button>
    </>
  );
};

export default AddToCartButton;

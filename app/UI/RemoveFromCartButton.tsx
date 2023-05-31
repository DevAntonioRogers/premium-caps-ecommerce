"use client";

import { useCartStore } from "@/store/useCartStore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const RemoveFromCartButton = ({ product }) => {
  const cartStore = useCartStore();

  const handleRemoveFromCart = () => {
    cartStore.deleteProduct(product);
  };
  return (
    <>
      <button onClick={handleRemoveFromCart}>
        <DeleteForeverIcon />
      </button>
    </>
  );
};

export default RemoveFromCartButton;

"use client";

import { useCartStore } from "@/store/useCartStore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useState } from "react";

const RemoveFromCartButton = ({ product }) => {
  // const [message, setMessage] = useState("");
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

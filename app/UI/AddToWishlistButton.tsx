"use client";
import { useCartStore } from "@/store";
import { ProductType } from "@/Types/ProductTypes";
import { Session } from "inspector";

import { useState } from "react";

const AddtoWishlistButton = ({ id, image, unit_amount, quantity, name }: ProductType, { user }: Session) => {
  const [error, setError] = useState("");
  const cartStore = useCartStore();
  const handleWishList = () => {
    if (user) {
      cartStore.addToWishlist({ id, image, unit_amount, quantity, name });
    } else {
      setError("Must be signed in");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
  };

  return (
    <>
      <button onClick={handleWishList}>Add to Wishlist</button>
      {error && (
        <div className="w-full fixed bottom-0 bg-primary p-3 left-0 text-center">
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default AddtoWishlistButton;

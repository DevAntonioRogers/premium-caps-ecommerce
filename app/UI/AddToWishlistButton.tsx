"use client";
import { useCartStore } from "@/store";
import { ProductType } from "@/Types/ProductTypes";
import { useState } from "react";

const AddtoWishlistButton = ({ id, image, unit_amount, quantity, name, user }: ProductType) => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const cartStore = useCartStore();
  const alreadyInWishList = cartStore.wishList.some((item) => item.id === id);
  const handleWishList = () => {
    if (user) {
      if (alreadyInWishList) {
        return;
      }
      cartStore.addToWishlist({ id, image, unit_amount, quantity, name });
      setMessage(`${name} has been added to your wishlist`);
      setTimeout(() => {
        setMessage("");
      }, 2000);
      return;
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
      {message && (
        <div className="w-full fixed bottom-0 bg-green-500 p-3 left-0 text-center text-white">
          <p>{message}</p>
        </div>
      )}
      {error && (
        <div className="w-full fixed bottom-0 bg-primary p-3 left-0 text-center text-white">
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default AddtoWishlistButton;

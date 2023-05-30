"use client";
import { useCartStore } from "@/store/useCartStore";
import { ProductType } from "@/Types/ProductTypes";
import { useState } from "react";

const AddToCartButton = ({ id, image, unit_amount, quantity, name, user }: ProductType) => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [alertBG, setAlertBG] = useState(false);
  const cartStore = useCartStore();
  const alreadyInCart = cartStore.cart.some((item) => item.id === id);
  const handleAddToCart = () => {
    if (user) {
      if (alreadyInCart) {
        setMessage(`${name} is already in your cart!`);
        setAlertBG(true);
        setTimeout(() => {
          setMessage("");
          setAlertBG(false);
        }, 2000);
        return;
      }
      cartStore.addToCart({ id, image, unit_amount, quantity, name });
      setMessage(`${name} has been added to your cart!`);
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
      <button onClick={handleAddToCart}>Add to Cart</button>
      {message && (
        <div
          className={
            alertBG
              ? "bg-red-600 w-full fixed bottom-0 p-3 left-0 text-center text-white"
              : "w-full fixed bottom-0 p-3 left-0 text-center text-white bg-green-600"
          }
        >
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

export default AddToCartButton;

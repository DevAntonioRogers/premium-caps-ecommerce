import { useEffect } from "react";
import { useCartStore } from "@/store/useCartStore";
import { ConfirmOrderAnimation } from "./OrderAnimations";

const OrderSuccess = () => {
  const cartStore = useCartStore();

  useEffect(() => {
    cartStore.setPaymentIntent("");
    cartStore.clearCart();
  }, []);

  return (
    <>
      <button onClick={() => cartStore.setCheckout("cart")}>Back to store</button>
      <ConfirmOrderAnimation />
    </>
  );
};

export default OrderSuccess;

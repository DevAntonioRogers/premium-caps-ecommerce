import { useEffect } from "react";
import { useCartStore } from "@/store";

const OrderSuccess = () => {
  const cartStore = useCartStore();

  useEffect(() => {
    cartStore.setPaymentIntent("");
    cartStore.clearCart();
  }, []);

  return <button onClick={() => cartStore.setCheckout("cart")}>Back to store</button>;
};

export default OrderSuccess;

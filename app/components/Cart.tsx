import { useCartStore } from "@/store/useCartStore";
import { totalPrice } from "@/utils/TotalPrice";
import { useEffect } from "react";

import Image from "next/image";
import formatPrice from "@/utils/PriceFormat";
import IncrementButton from "../UI/IncrementButton";
import DecrementButton from "../UI/DecrementButton";
import Checkout from "./Checkout";
import OrderSuccess from "./OrderSuccess";

const Cart = () => {
  const cartStore = useCartStore();
  const total = totalPrice(cartStore.cart);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", cartStore.onCheckout !== null);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [cartStore.onCheckout]);

  return (
    <div onClick={() => cartStore.toggleCart()} className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white absolute right-0 top-0 md:w-2/5 w-3/4 h-screen p-12 overflow-x-scroll"
      >
        {cartStore.onCheckout === "checkout" && (
          <button onClick={() => cartStore.setCheckout("cart")} className="text-sm font-bold pb-12">
            Back to Cart
          </button>
        )}
        {cartStore.onCheckout === "cart" && (
          <>
            <button onClick={() => cartStore.toggleCart()}>Back to store</button>
            {cartStore.cart.map((product) => (
              <div className="flex py-4 gap-4 items-center border-b-grey-600 border-b-2 justify-between">
                <Image className="w-16 sm:w-20 md:w-24" src={product.image} alt={product.name} width={80} height={80} />

                <h1 className="font-medium">{product.name}</h1>
                <div className="flex gap-2 justify-center items-center bg-black/10 px-2 rounded-sm">
                  <DecrementButton product={product} />
                  <h2>{product.quantity}</h2>
                  <IncrementButton product={product} />
                </div>
              </div>
            ))}
            {cartStore.cart.length > 0 ? <span className="mt-10">Total: {formatPrice(total)}</span> : null}
          </>
        )}

        {cartStore.cart.length < 1 && cartStore.onCheckout === "cart" ? (
          <div className="h-full flex items-center justify-center">
            <span className="text-xl uppercase font-bold italic whitespace-nowrap">Your cart is empty</span>
          </div>
        ) : null}
        {cartStore.cart.length > 0 && cartStore.onCheckout === "cart" ? (
          <button onClick={() => cartStore.setCheckout("checkout")} className="bg-primary py-2 mt-4 w-full">
            Checkout
          </button>
        ) : null}
        {cartStore.onCheckout === "checkout" && <Checkout />}
        {cartStore.onCheckout === "success" && <OrderSuccess />}
      </div>
    </div>
  );
};

export default Cart;

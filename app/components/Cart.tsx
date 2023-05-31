import { useCartStore } from "@/store/useCartStore";
import { totalPrice } from "@/utils/TotalPrice";

import Image from "next/image";
import formatPrice from "@/utils/PriceFormat";
import IncrementButton from "../UI/IncrementButton";
import DecrementButton from "../UI/DecrementButton";
import Checkout from "./Checkout";
import OrderSuccess from "./OrderSuccess";
import RemoveFromCartButton from "../UI/RemoveFromCartButton";

const Cart = () => {
  const cartStore = useCartStore();
  const total = totalPrice(cartStore.cart);

  return (
    <div onClick={() => cartStore.toggleCart()} className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white absolute right-0 top-0 md:w-2/5 w-3/5 h-screen p-12 overflow-x-scroll"
      >
        {cartStore.onCheckout === "checkout" && (
          <button onClick={() => cartStore.setCheckout("cart")} className="text-sm font-bold pb-12">
            Back to Cart
          </button>
        )}
        {cartStore.onCheckout === "cart" && (
          <>
            {cartStore.cart.map((product) => (
              <div>
                <Image src={product.image} alt={product.name} width={100} height={100} />
                <h1>{product.name}</h1>
                <div>
                  <h2>Quantity: {product.quantity}</h2>
                  {/* INCREMENT PRODUCT QUANITY */}
                  <IncrementButton product={product} />
                  {/* DECREASE PRODUCT AMOUNT */}
                  <DecrementButton product={product} />
                </div>
                <RemoveFromCartButton product={product} />
                <p>{product.unit_amount && formatPrice(product.unit_amount)}</p>
                <span>Total: {formatPrice(total)}</span>
              </div>
            ))}
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

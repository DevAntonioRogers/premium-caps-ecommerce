import { useCartStore } from "@/store";
import Image from "next/image";
import { totalPrice } from "@/utils/TotalPrice";
import formatPrice from "@/utils/PriceFormat";
import IncrementButton from "../UI/IncrementButton";
import DecrementButton from "../UI/DecrementButton";

const Cart = () => {
  const cartStore = useCartStore();
  const total = totalPrice(cartStore.cart);

  return (
    <div onClick={() => cartStore.toggleCart()} className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white absolute right-0 top-0 w-2/5 h-screen p-12">
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
                <p>{product.unit_amount && formatPrice(product.unit_amount)}</p>
                <span>Total: {formatPrice(total)}</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

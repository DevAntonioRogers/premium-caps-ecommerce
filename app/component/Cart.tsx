import { useCartStore } from "@/store";

const Cart = () => {
  const cartStore = useCartStore();
  return (
    <div onClick={() => cartStore.toggleCart()} className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white absolute right-0 top-0 w-2/5 h-screen p-12"></div>
    </div>
  );
};

export default Cart;

import { useCartStore } from "@/store";
import { Session } from "@prisma/client";
import Image from "next/image";
import AddToCartButton from "../UI/AddToCartButton";

const WishList = ({ user }: Session) => {
  const cartStore = useCartStore();
  return (
    <div onClick={() => cartStore.toggleWishList()} className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50">
      <div>
        <div onClick={(e) => e.stopPropagation()} className="bg-white absolute right-0 top-0 w-2/5 h-screen p-12">
          {cartStore.onWishList === "wishlist" && (
            <>
              <h1>Hello {user.name}</h1>
              <span>Yout have {cartStore.wishList.length} items in your wishlist</span>
              {cartStore.wishList.map((product) => (
                <div>
                  <Image src={product.image} alt={product.name} width={100} height={100} />
                  <h1>{product.name}</h1>
                  <AddToCartButton {...product} />
                  <button onClick={() => cartStore.removeFromWishlist({ ...product })}>REMOVE</button>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishList;

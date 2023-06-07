import { useWishlistStore } from "@/store/useWishlistStore";
import { Session } from "next-auth";
import Image from "next/image";
import AddToCartButton from "../UI/AddToCartButton";

const WishList = ({ user }: Session) => {
  const wishlistStore = useWishlistStore();
  return (
    <div onClick={() => wishlistStore.toggleWishList()} className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50">
      <div>
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white absolute right-0 top-0 md:w-2/5 w-3/4 h-screen p-12"
        >
          <button onClick={() => wishlistStore.toggleWishList()}>Back to store</button>
          {wishlistStore.onWishList === "wishlist" && wishlistStore.wishList.length > 0 ? (
            <>
              <h1>Hello {user?.name}</h1>
              <span>You have {wishlistStore.wishList.length} items in your wishlist</span>
              {wishlistStore.wishList.map((product) => (
                <div>
                  <Image src={product.image} alt={product.name} width={100} height={100} />
                  <h1>{product.name}</h1>
                  <div className="flex gap-5">
                    <AddToCartButton {...product} />
                    <button onClick={() => wishlistStore.removeFromWishlist({ ...product })}>Remove</button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <h1 className="font-bold italic text-xl">Your Wishlist is empty</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishList;

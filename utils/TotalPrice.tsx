import { CartType } from "@/Types/CartTypes";

export const totalPrice = (cart: CartType[]) => {
  return cart.reduce((acc, item) => {
    return acc + item.unit_amount! * item.quantity!;
  }, 0);
};

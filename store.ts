import {create, } from 'zustand'
import {persist} from 'zustand/middleware'
import { CartType } from './Types/CartTypes'

type CartState = {
  isOpen: boolean
  openWishlist: boolean
  onCheckout: string
  onWishList: string
  cart: CartType[]
  wishList: CartType[]
  paymentIntent: string
  clearCart: () => void
  addToWishlist: (item: CartType) => void
  removeFromWishlist:(item: CartType) => void
  addToCart: (item: CartType) => void
  removeProduct: (item: CartType) => void
  toggleCart: () => void
  toggleWishList: () => void
  setPaymentIntent: (val: string) => void
  setCheckout: (val: string) => void
}

export const useCartStore = create<CartState>()(
  persist (
    (set) => ({
      // INITIAL STATES
      cart: [],
      isOpen: false,
      openWishlist: false,
      paymentIntent: "",
      wishList: [],
      onWishList: "wishlist",
      onCheckout: "cart",

      
      
      // SETTING STATES
      toggleCart: () => set((state) => ({isOpen: !state.isOpen})),
      toggleWishList: () => set((state) => ({openWishlist: !state.openWishlist})),
      addToCart: (item) => set((state) => {
        const existingItem = state.cart.find((cartItem) => cartItem.id === item.id)
        if (existingItem) {
          const updatedCart = state.cart.map((cartItem) => {
            if(cartItem.id === item.id){
              return {...cartItem, quantity: cartItem.quantity! + 1}
            }
            return cartItem
          })
          return {cart: updatedCart}
        } else {
          return {cart: [...state.cart, {...item, quantity: 1}]}
        }
      }),
      removeProduct: (item) => set((state) => {
        const existingItem = state.cart.find((cartItem) => cartItem.id === item.id)
        if(existingItem && existingItem.quantity! > 1) {
          const updatedCart = state.cart.map((cartItem) => {
            if(cartItem.id === item.id){
              return {...cartItem, quantity: cartItem.quantity! - 1}
            }
            return cartItem
          })
          return {cart: updatedCart}
        } else {
          const filteredCart = state.cart.filter((cartItem) => cartItem.id !== item.id)
          return {cart: filteredCart}
        }
      }),
      addToWishlist: (item) => set((state) => {
        const existingItem = state.wishList.find((wishItem) => wishItem.id === item.id)
        if (existingItem) {
          const updatedWishList = state.wishList.map((wishItem) => {
            if(wishItem.id === item.id){
              return {...wishItem, quantity: 1}
            }
            return wishItem
          })
          return {wishList: updatedWishList}
        } else {
          return {wishList: [...state.wishList, {...item, quantity: 1}]}
        }
      }),
      removeFromWishlist: (item) => set((state) => {
        const existingItem = state.wishList.find((wishItem) => wishItem.id === item.id)
        if(existingItem && existingItem.quantity! > 1) {
          const updatedWishList = state.wishList.map((wishItem) => {
            if(wishItem.id === item.id){
              return {...wishItem, quantity: wishItem.quantity! - 1}
            }
            return wishItem
          })
          return {wishList: updatedWishList}
        } else {
          const filteredWishList = state.wishList.filter((wishItem) => wishItem.id !== item.id)
          return {wishList: filteredWishList}
        }
      }),
      setPaymentIntent : (val) => set((set) => ({paymentIntent: val})),
      setCheckout : (val) => set((set) => ({onCheckout: val})),
      clearCart: () => set((state) => ({ cart: [] })),
    }),
    
    {name: "cart-store"}
  )
)
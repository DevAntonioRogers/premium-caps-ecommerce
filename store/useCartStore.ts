import {create, } from 'zustand'
import {persist} from 'zustand/middleware'
import { CartType } from '../Types/CartTypes'

type CartState = {
  isOpen: boolean
  onCheckout: string
  cart: CartType[]
  paymentIntent: string
  clearCart: () => void
  addToCart: (item: CartType) => void
  removeProduct: (item: CartType) => void
  toggleCart: () => void
  setPaymentIntent: (val: string) => void
  setCheckout: (val: string) => void
}

export const useCartStore = create<CartState>()(
  persist (
    (set) => ({
      // INITIAL STATES
      cart: [],
      isOpen: false,
      paymentIntent: "",
      onCheckout: "cart",

      
      
      // SETTING STATES
      toggleCart: () => set((state) => ({isOpen: !state.isOpen})),
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
      setPaymentIntent : (val) => set((set) => ({paymentIntent: val})),
      setCheckout : (val) => set((set) => ({onCheckout: val})),
      clearCart: () => set((state) => ({ cart: [] })),
    }),
    
    {name: "cart-store"}
  )
)
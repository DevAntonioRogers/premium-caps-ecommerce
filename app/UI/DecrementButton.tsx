import { useCartStore } from "@/store/useCartStore";
import { ProductType } from "@/Types/ProductTypes";
import RemoveIcon from "@mui/icons-material/Remove";

interface DecrementPropType {
  product: ProductType;
}

const DecrementButton = ({ product }: DecrementPropType) => {
  const cartStore = useCartStore();
  return (
    <button
      onClick={() =>
        cartStore.removeProduct({
          id: product.id,
          unit_amount: product.unit_amount,
          quantity: product.quantity,
          name: product.name,
          image: product.image,
        })
      }
    >
      <RemoveIcon />
    </button>
  );
};

export default DecrementButton;

import { useCartStore } from "@/store";
import { ProductType } from "@/Types/ProductTypes";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

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
      <RemoveCircleIcon />
    </button>
  );
};

export default DecrementButton;

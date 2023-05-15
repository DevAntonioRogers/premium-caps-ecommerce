import { useCartStore } from "@/store";
import { ProductType } from "@/Types/ProductTypes";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface IncrementPropType {
  product: ProductType;
}

const IncrementButton = ({ product }: IncrementPropType) => {
  const cartStore = useCartStore();
  return (
    <button
      onClick={() =>
        cartStore.addToCart({
          id: product.id,
          unit_amount: product.unit_amount,
          quantity: product.quantity,
          name: product.name,
          image: product.image,
        })
      }
    >
      <AddCircleIcon />
    </button>
  );
};

export default IncrementButton;

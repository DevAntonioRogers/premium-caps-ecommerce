import { useCartStore } from "@/store/useCartStore";
import { ProductType } from "@/Types/ProductTypes";
import AddIcon from "@mui/icons-material/Add";

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
      <AddIcon />
    </button>
  );
};

export default IncrementButton;

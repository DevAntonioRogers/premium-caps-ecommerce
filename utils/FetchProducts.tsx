import Stripe from "stripe";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const FetchProducts = async () => {
  const session = await getServerSession(authOptions);
  const getProducts = async () => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
      apiVersion: "2022-11-15",
    });
    const products = await stripe.products.list();

    const allProducts = await Promise.all(
      products.data.map(async (product) => {
        const prices = await stripe.prices.list({ product: product.id });
        return {
          id: product.id,
          name: product.name,
          unit_amount: prices.data[0].unit_amount,
          image: product.images[0],
          currency: prices.data[0].currency,
          description: product.description,
          metadata: product.metadata,
        };
      })
    );
    return allProducts;
  };

  const products = await getProducts();

  return products
};

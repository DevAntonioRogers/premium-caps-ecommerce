import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import formatPrice from "@/utils/PriceFormat";
import Image from "next/image";
import { formatDate } from "@/utils/DateTimeFormat";

export const revalidate = 0;

const fetchOrders = async () => {
  const prisma = new PrismaClient();
  const user = await getServerSession(authOptions);
  if (!user) {
    return null;
  }
  const orders = await prisma.order.findMany({
    where: { userId: user?.user?.id },
    include: { products: true },
  });
  return orders;
};

export default async function Dashboard() {
  const orders = await fetchOrders();
  const user = await getServerSession(authOptions);
  return (
    <div>
      <div className="p-8 flex items-center justify-center gap-12">
        <Image
          className="rounded-full object-cover"
          width={100}
          height={100}
          src={user?.user?.image as string}
          alt={user?.user?.name as string}
        />
        <div>
          <p className="text-2xl font-bold italic">{user?.user?.name}</p>
          <p>{user?.user?.email}</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold italic text-xl text-center underline">Orders</h1>
        {orders?.length === 0 ? (
          <div>
            <h1>No orders placed</h1>
          </div>
        ) : (
          <>
            {orders?.map((order) => (
              <div key={order.id} className="rounded-lg p-8 my-4 space-y-2 bg-base-200">
                <h2 className="text-xs font-medium">Order Number: {order.id.replace(/\D/g, "")}</h2>
                <p className="text-xs">
                  Status:
                  <span className="bg-primary text-white py-1 rounded-md px-2 mx-2 text-xs">{order.status}</span>
                </p>

                <p className="text-xs">{formatDate(order.createdDate)} </p>
                <div className="text-sm lg:flex items-center  gap-4">
                  {order.products.map((product) => (
                    <div className="py-2" key={product.id}>
                      <h2 className="py-2">{product.name}</h2>
                      <div className="flex items-baseline gap-4">
                        <Image src={product.image!} width={36} height={36} alt={product.name} />
                        <p>{formatPrice(product.unit_amount)}</p>
                        <p>Quantity: {product.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="font-medium py-2">Total: {formatPrice(order.amount)}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

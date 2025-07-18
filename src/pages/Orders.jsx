import { useAuth } from "../hooks/useAuth";
import { useProducts } from "../hooks/useProductData";
import { getOrdersByUserId } from "../data/orders";
import { useEffect, useState } from "react";
import OrderSummaryCard from "../components/card-components/OrderSummaryCard";

const Orders = () => {
  const { user } = useAuth();
  const { products } = useProducts();
  console.log("User in Orders page:", user);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return setLoading(false);

      try {
        const fetchedOrders = await getOrdersByUserId(user.id);

        // Map orders to add full product details to each item
        const enrichedOrders = fetchedOrders.map((order) => {
          const orderItems = order.items.map((item) => {
            const product = products.find(
              (p) => String(p.id) === String(item.productId)
            );
            return {
              ...item,
              product: product || null,
            };
          });

          return {
            ...order,
            enrichedItems: orderItems,
          };
        });

        setOrders(enrichedOrders);

        console.log("Fetched orders:", enrichedOrders);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user, products]);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-bold m-4">Your orders</h1>
        <p className="text-lg">Please sign in to view your orders.</p>
      </div>
    );
  }

  if (loading) {
    return <p className="text-center mt-4">Loading your orders...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600 mt-4">{error}</p>;
  }
  console.log("Orders fetched:", orders);

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold mt-4">Your orders</h1>
      <div className="p-4 max-w-4xl mx-auto">
        {orders.length === 0 ? (
          <p>You haven’t placed any orders yet.</p>
        ) : (
          orders.map((order) => (
            <OrderSummaryCard
              key={order.orderId}
              orderId={order.orderId}
              orderData={order}
              orderItems={order.enrichedItems}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default Orders;

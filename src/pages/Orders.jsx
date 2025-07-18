import { useAuth } from "../hooks/useAuth";
import { useProducts } from "../hooks/useProductData";
import { getOrdersByUserId } from "../data/orders";
import { useEffect, useState } from "react";
import OrderSummaryCard from "../components/card-components/OrderSummaryCard";
import orderConfirmed from "../assets/order_confirmed.png";

const Orders = () => {
  const { user } = useAuth();
  const { products } = useProducts();
  console.log("User in Orders page:", user);

  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all");
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

  const getFilteredOrders = () => {
    const now = new Date();

    return orders.filter((order) => {
      const orderDate = new Date(order.createdAt); // Make sure `order.date` is valid

      if (filter === "week") {
        const startOfWeek = new Date();
        startOfWeek.setDate(now.getDate() - now.getDay()); // Sunday as start
        return orderDate >= startOfWeek;
      }

      if (filter === "3months") {
        const threeMonthsAgo = new Date();
        threeMonthsAgo.setMonth(now.getMonth() - 3);
        return orderDate >= threeMonthsAgo;
      }

      return true;
    });
  };

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
        {getFilteredOrders().length === 0 ? (
          <>
            <div className="max-w-[300px] mx-auto mt-3">
              <img
                src={orderConfirmed}
                alt="a stylized illustration of a happy cat in a box"
              />
            </div>
            <p>You haven’t placed any orders yet.</p>
          </>
        ) : (
          <>
            <div className="flex justify-center gap-4 my-4">
              <button
                className={`btn ${
                  filter === "all" ? "bg-blue-600" : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setFilter("all")}
              >
                All Orders
              </button>
              <button
                className={`btn ${
                  filter === "3months"
                    ? "bg-blue-600 "
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setFilter("3months")}
              >
                Last 3 Months
              </button>
              <button
                className={`btn ${
                  filter === "week"
                    ? "bg-blue-600"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setFilter("week")}
              >
                This Week
              </button>
            </div>
            {getFilteredOrders()
              .slice()
              .reverse()
              .map((order) => (
                <OrderSummaryCard
                  key={order.orderId}
                  orderId={order.orderId}
                  orderData={order}
                  orderItems={order.enrichedItems}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
};
export default Orders;

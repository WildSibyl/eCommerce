import { useOutletContext } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Orders = () => {
  const { user } = useAuth();
  console.log("User in Orders page:", user);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-bold m-4">Your orders</h1>
        <p className="text-lg">Please sign in to view your orders.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold m-4">Your orders</h1>
      <p className="text-lg">
        {user
          ? `Here are your orders, ${user.userName}:`
          : "Please sign in to view your orders."}
      </p>
    </div>
  );
};
export default Orders;

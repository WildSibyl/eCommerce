import { Link, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import orderConfirmed from "../assets/order_confirmed.png";
import ProgressBar from "../components/checkout-components/ProgressBar";
import { getOrderById } from "../data/orders";
import { useProducts } from "../hooks/useProductData";
import OrderSummaryCard from "../components/card-components/OrderSummaryCard";

const OrderConfirmation = () => {
  //   const { data, setAddressFormData } = useOutletContext();
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { products } = useProducts();

  const orderItems = orderData?.items?.map((item) => {
    const product = products.find(
      (p) => String(p.id) === String(item.productId)
    );
    return {
      ...item,
      product: product || null,
    };
  });

  useEffect(() => {
    getOrderById(orderId)
      .then((data) => {
        setOrderData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [orderId]);

  if (loading) return <p>Loading order details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center lg:px-[10%]">
      <div className="p-4 w-full">
        <ProgressBar currentStep={2} />
      </div>
      <h1 className="text-3xl font-bold">Thank you for your order!</h1>
      <div className="max-w-[300px] mx-auto mt-3">
        <img
          src={orderConfirmed}
          alt="a stylized illustration of a happy cat in a box"
        />
      </div>
      <OrderSummaryCard
        orderId={orderId}
        orderData={orderData}
        orderItems={orderItems}
      />
      {orderData?.userId === null ? null : (
        <Link to="/orders">
          <p className="font-bold cursor-pointer underline hover:text-blue-500 mb-4">
            View your orders
          </p>
        </Link>
      )}
      <Link to="/">
        <p className="font-bold cursor-pointer underline hover:text-blue-500 mb-4">
          Go back to the Homepage
        </p>
      </Link>
    </div>
  );
};

export default OrderConfirmation;

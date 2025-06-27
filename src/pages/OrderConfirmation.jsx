import { Link, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import orderConfirmed from "../assets/order_confirmed.png";
import ProgressBar from "../checkout-components/ProgressBar";
import { getOrderById } from "../data/orders";

const OrderConfirmation = () => {
  //   const { data, setAddressFormData } = useOutletContext();
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <div className="max-w-[300px] mx-auto m-4">
        <img
          src={orderConfirmed}
          alt="a stylized illustration of a happy cat in a box"
        />
      </div>
      <p className="text-lg">
        Your order number is: <strong>{orderId}</strong>
      </p>
      <div className="flex flex-col md:flex-row gap-4 my-4">
        <div className="border border-base-100 rounded-2xl bg-base-200 p-4">
          <h2 className="text-xl font-semibold mb-2">Shipping address:</h2>
          <div>{orderData.shipping.address}</div>
          <div>{orderData.shipping.city}</div>
          <div>{orderData.shipping.state}</div>
          <div>{orderData.shipping.zip}</div>
          <div>{orderData.shipping.country}</div>
        </div>
        <div className="border border-base-100 rounded-2xl bg-base-200 p-4">
          <h2 className="text-xl font-semibold mb-2">Order summary:</h2>
          <p>N. of items: {orderData.items.length}</p>
          <p>Shipping fee: {orderData.fee}</p>
          <p>Total price: {orderData.total / 100}</p>
        </div>
      </div>
      <Link to="/">
        <p className="font-bold cursor-pointer underline hover:text-blue-500 mt-4">
          Go to the Homepage
        </p>
      </Link>
    </div>
  );
};

export default OrderConfirmation;

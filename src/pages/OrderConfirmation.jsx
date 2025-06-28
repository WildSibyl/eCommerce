import { Link, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import orderConfirmed from "../assets/order_confirmed.png";
import ProgressBar from "../checkout-components/ProgressBar";
import { getOrderById } from "../data/orders";
import { useProducts } from "../hooks/useProductData";

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
      <div className="flex flex-col md:flex-row gap-4 mt-2 mb-4">
        <div className="border border-base-100 rounded-2xl bg-base-200 p-4">
          <p className="text-xl mb-4 font-semibold"># {orderId}</p>
          {orderData?.userId === null && (
            <p className="mb-4 text-center font-bold bg-error text-error-content rounded-lg px-3 py-2">
              You are not logged in! Please save your order number for future
              reference.
            </p>
          )}
          {orderItems?.map((item) =>
            item.product ? (
              <div
                key={item.productId}
                className="order-item flex items-center gap-4 mb-4"
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-24 h-24 object-cover mb-2"
                  />
                </div>
                <div>
                  <h4 className="font-semibold max-w-100 line-clamp-1">
                    {item.product.title}
                  </h4>
                  <p>x{item.quantity}</p>
                  <p>
                    €{" "}
                    {item.product.discount > 0
                      ? (
                          (item.product.price -
                            item.product.price *
                              (item.product.discount / 100)) *
                          item.quantity
                        ).toFixed(2)
                      : (item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ) : (
              <div key={item.productId}>
                <p>Product not found (ID: {item.productId})</p>
              </div>
            )
          )}
          <div className="flex">
            <p className="w-28 flex-shrink-0">Shipping:</p>
            <p>€ {orderData.fee}</p>
          </div>
          <div className="flex">
            <p className="w-28 flex-shrink-0">Total:</p>
            <p>€ {orderData.total / 100}</p>
          </div>
        </div>
        <div className="border border-base-100 rounded-2xl bg-base-200 p-4 min-w-50">
          <h2 className="text-xl font-semibold mb-2">Shipping to:</h2>
          <div>{orderData.shipping.name}</div>
          <div>{orderData.shipping.street}</div>
          <div>
            {orderData.shipping.zip}, {orderData.shipping.city}
          </div>
          <div>({orderData.shipping.state})</div>
          <div>{orderData.shipping.country}</div>
        </div>
      </div>
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

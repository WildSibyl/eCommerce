import { Link, useOutletContext } from "react-router";

const OrderConfirmation = () => {
  //   const { addressFormData, setAddressFormData } = useOutletContext();

  return (
    <div className="order-confirmation">
      <h1>Order Confirmation</h1>
      <p>Thank you for your order!</p>
      <p>Your order number is: 123456</p>
      {/* <div>{addressFormData.fullName}</div>
      <div>{addressFormData.street}</div>
      <div>{addressFormData.city}</div>
      <div>{addressFormData.state}</div>
      <div>{addressFormData.postalCode}</div>
      <div>{addressFormData.country}</div> */}
      <p>We will send you an email confirmation shortly.</p>

      <p>If you have any questions, please contact our support team.</p>

      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default OrderConfirmation;

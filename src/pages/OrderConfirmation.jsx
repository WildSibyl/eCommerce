import { Link, useOutletContext } from "react-router";

const OrderConfirmation = () => {
  //   const { addressFormData, setAddressFormData } = useOutletContext();

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold m-4">Thank you for your order!</h1>
      <p className="text-lg mb-4">Your order number is: 123456</p>
      <p>Please find below the order details:</p>
      <div className="border border-base-100">
        {/* <div>{addressFormData.fullName}</div>
      <div>{addressFormData.street}</div>
      <div>{addressFormData.city}</div>
      <div>{addressFormData.state}</div>
      <div>{addressFormData.postalCode}</div>
      <div>{addressFormData.country}</div> */}
      </div>
      <p>We will send you an email confirmation shortly.</p>

      <p>If you have any questions, please contact our support team.</p>

      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default OrderConfirmation;

import { Link, useOutletContext } from "react-router";
import orderConfirmed from "../assets/order_confirmed.png";

const OrderConfirmation = () => {
  //   const { addressFormData, setAddressFormData } = useOutletContext();

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold m-4">Thank you for your order!</h1>
      <div className="max-w-[300px] mx-auto m-4">
        <img
          src={orderConfirmed}
          alt="a stylized illustration of a happy cat in a box"
        />
      </div>
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

      <Link to="/">
        <p className="font-bold cursor-pointer hover:underline">Back to Home</p>
      </Link>
    </div>
  );
};

export default OrderConfirmation;

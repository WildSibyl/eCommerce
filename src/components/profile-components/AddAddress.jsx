import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { updateAddress } from "../../data/auth";
import { toast } from "react-toastify";

const AddAddress = () => {
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const { user, setUser } = useAuth();

  const userAddress = user?.address || "";

  const [addressForm, setAddressForm] = useState({
    userName: user?.userName || "",
    street: userAddress.street || "",
    zipCode: userAddress.zipCode || "",
    city: userAddress.city || "",
    state: userAddress.state || "",
    country: userAddress.country || "",
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancelAddress = () => {
    setIsEditingAddress(false);
    setAddressForm({
      userName: user?.userName || "",
      street: userAddress.street || "",
      zipCode: userAddress.zipCode || "",
      city: userAddress.city || "",
      state: userAddress.state || "",
      country: userAddress.country || "",
    });
  };

  const handleUpdateAddress = async () => {
    const { userName, street, zipCode, city, state, country } = addressForm;
    try {
      await updateAddress({ userName, street, zipCode, city, state, country });
      toast.success("Address updated!");

      setUser((prev) => ({ ...prev, address: addressForm }));

      // Reset fields
      setAddressForm({
        userName: user?.userName || "",
        street: addressForm.street || "",
        zipCode: addressForm.zipCode || "",
        city: addressForm.city || "",
        state: addressForm.state || "",
        country: addressForm.country || "",
      });

      setIsEditingAddress(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="bg-base-100 p-6 rounded-2xl shadow-md">
      <h2 className="text-lg font-bold mb-4">Your shipping address</h2>
      {!isEditingAddress ? (
        <div className="flex justify-between items-center">
          {user?.address == null ? (
            <p className="text-gray-500">
              No default address set. Add one to pre-fill orders!
            </p>
          ) : (
            <div className="space-y-2">
              <p>{addressForm.userName}</p>
              <p>{addressForm.street}</p>
              <p>
                {addressForm.zipCode} {addressForm.city}
              </p>
              <p>
                {addressForm.state}, {addressForm.country}
              </p>
            </div>
          )}
          <p>{addressForm.address}</p>
          <button
            onClick={() => setIsEditingAddress(true)}
            className="btn w-22 self-end"
          >
            Edit
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4 max-w-md mx-auto">
            <input
              type="text"
              name="userName"
              placeholder="Full name"
              value={addressForm.userName}
              onChange={handleAddressChange}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="street"
              placeholder="Street and house number"
              value={addressForm.street}
              onChange={handleAddressChange}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="zipCode"
              placeholder="Zip code"
              value={addressForm.zipCode}
              onChange={handleAddressChange}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={addressForm.city}
              onChange={handleAddressChange}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="state"
              placeholder="State/Province"
              value={addressForm.state}
              onChange={handleAddressChange}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={addressForm.country}
              onChange={handleAddressChange}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-4 mt-4 w-full items-center justify-center">
            <button
              onClick={handleCancelAddress}
              className="btn w-22 bg-gray-400"
            >
              Cancel
            </button>
            <button onClick={handleUpdateAddress} className="btn w-22">
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AddAddress;

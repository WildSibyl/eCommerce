import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { deleteAccount } from "../../data/auth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { signOut } from "../../data/auth";
import Input from "../form-components/Input";

const DeleteAccount = () => {
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const [deleteForm, setDeleteForm] = useState({
    email: "",
    password: "",
  });

  const handleDeleteChange = (e) => {
    const { name, value } = e.target;
    setDeleteForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancelDelete = () => {
    setIsDeletingAccount(false);
    setDeleteForm({
      email: "",
      password: "",
    });
  };

  const handleDeleteAccount = async () => {
    try {
      await deleteAccount(deleteForm); // you’ll implement this in your API layer
      toast.success("Account deleted. Sorry to see you go!");

      // Reset fields
      setDeleteForm({
        email: "",
        password: "",
      });

      signOut();
      setUser(null);
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div
      className={`p-6 rounded-2xl shadow-md ${
        isDeletingAccount ? "bg-red-100 border border-red-400" : "bg-base-100"
      }`}
    >
      <h2 className="text-lg font-bold mb-4 text-error-content">
        Delete account
      </h2>
      {!isDeletingAccount ? (
        <div className="flex justify-between items-center">
          <p className="text-error-content">Permanently delete your account.</p>
          <button
            onClick={() => setIsDeletingAccount(true)}
            className="btn bg-red-700 hover:bg-red-500 w-22"
          >
            Delete
          </button>
        </div>
      ) : (
        <>
          <Input
            name="email"
            type="text"
            value={deleteForm.email}
            onChange={handleDeleteChange}
            maxLength={250}
            placeholder="Enter your e-mail"
          />
          <Input
            name="password"
            type="password"
            value={deleteForm.password}
            onChange={handleDeleteChange}
            maxLength={250}
            placeholder="Enter your password"
          />
          <p className="text-error-content">
            By clicking the button below you will permanently delete your
            account, there will be no way to restore it.
          </p>
          <div className="flex gap-4 mt-4 w-full items-center justify-center">
            <button
              onClick={handleCancelDelete}
              className="btn w-22 bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteAccount}
              className="btn bg-red-700 hover:bg-red-500 w-22"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DeleteAccount;

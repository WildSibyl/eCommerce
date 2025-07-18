import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { updatePassword } from "../../data/auth";
import { toast } from "react-toastify";
import Input from "../form-components/Input";

const ChangePassword = () => {
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const { user, setUser } = useAuth();

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancelPassword = () => {
    setIsEditingPassword(false);
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };

  const handleUpdatePassword = async () => {
    try {
      await updatePassword(passwordForm);
      toast.success("Password updated!");

      // Reset fields
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });

      setIsEditingPassword(false);
    } catch (err) {
      toast.error(err.message);
    }
    //console.log("Updating password", passwordForm);
    setIsEditingPassword(false);
  };

  return (
    <div className="bg-base-100 p-6 rounded-2xl shadow-md">
      <h2 className="text-lg font-bold mb-4">Your password</h2>
      {!isEditingPassword ? (
        <div className="flex justify-between items-center">
          <p>•••••••••••••••</p>
          <button
            onClick={() => setIsEditingPassword(true)}
            className="btn w-22"
          >
            Edit
          </button>
        </div>
      ) : (
        <>
          <Input
            name="currentPassword"
            type="password"
            value={passwordForm.currentPassword}
            onChange={handlePasswordChange}
            maxLength={250}
            placeholder="Current Password"
          />
          <Input
            name="newPassword"
            type="password"
            value={passwordForm.newPassword}
            onChange={handlePasswordChange}
            maxLength={250}
            placeholder="New Password"
          />
          <Input
            name="confirmNewPassword"
            type="password"
            value={passwordForm.confirmNewPassword}
            onChange={handlePasswordChange}
            maxLength={250}
            placeholder="Confirm New Password"
          />
          <div className="flex gap-4 mt-4 w-full items-center justify-center">
            <button
              onClick={handleCancelPassword}
              className="btn w-22 bg-gray-400"
            >
              Cancel
            </button>
            <button onClick={handleUpdatePassword} className="btn w-22">
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChangePassword;

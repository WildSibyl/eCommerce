import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { updateEmail } from "../../data/auth";
import { toast } from "react-toastify";
import Input from "../form-components/Input";

const ChangeEmail = () => {
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const { user, setUser } = useAuth();

  const userEmail = user?.email || "";

  const [emailForm, setEmailForm] = useState({
    email: userEmail,
    newEmail: "",
    currentPassword: "",
    confirmNewEmail: "",
  });

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setEmailForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancelEmail = () => {
    setIsEditingEmail(false);
    setEmailForm({
      email: userEmail,
      newEmail: "",
      currentPassword: "",
      confirmNewEmail: "",
    });
  };

  const handleUpdateEmail = async () => {
    const { newEmail, confirmNewEmail, currentPassword } = emailForm;
    try {
      await updateEmail({ newEmail, confirmNewEmail, currentPassword });
      toast.success("Email updated!");

      setUser((prev) => ({ ...prev, email: newEmail }));

      // Reset fields
      setEmailForm({
        email: newEmail,
        newEmail: "",
        confirmNewEmail: "",
        currentPassword: "",
      });

      setIsEditingEmail(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const maskEmail = (email) => {
    const [user, domain] = email.split("@");
    if (!user || !domain) return "";
    return `${user[0]}***@${domain}`;
  };

  return (
    <div className="bg-base-100 p-6 rounded-2xl shadow-md">
      <h2 className="text-lg font-bold mb-4">Your e-mail</h2>
      {!isEditingEmail ? (
        <div className="flex justify-between items-center">
          <p>{maskEmail(emailForm.email)}</p>
          <button onClick={() => setIsEditingEmail(true)} className="btn w-22">
            Edit
          </button>
        </div>
      ) : (
        <>
          <Input
            name="newEmail"
            type="email"
            value={emailForm.newEmail}
            onChange={handleEmailChange}
            maxLength={250}
            placeholder="New Email"
          />
          <Input
            name="confirmNewEmail"
            type="email"
            value={emailForm.confirmNewEmail}
            onChange={handleEmailChange}
            maxLength={250}
            placeholder="Confirm New Email"
          />
          <Input
            name="currentPassword"
            type="password"
            value={emailForm.currentPassword}
            onChange={handleEmailChange}
            maxLength={250}
            placeholder="Current Password"
          />
          <div className="flex gap-4 mt-4 w-full items-center justify-center">
            <button
              onClick={handleCancelEmail}
              className="btn w-22 bg-gray-400"
            >
              Cancel
            </button>
            <button onClick={handleUpdateEmail} className="btn w-22">
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChangeEmail;

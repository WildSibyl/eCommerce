import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { signUp } from "../data/auth";
import { useAuth } from "../hooks/useAuth";
import { useWelcomeModal } from "../context/WelcomeModalContextProvider";
import TermsModal from "../components/reg-comp/TermsModal";

const Register = ({ setUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [regForm, setRegForm] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const navigate = useNavigate();
  const { user } = useAuth();
  const { openWelcomeModal } = useWelcomeModal();

  if (user) return <Navigate to="/" />;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "terms") {
      // Handle single checkbox boolean here (like 'terms')
      setRegForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setRegForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateInput = () => {
    if (!regForm.userName) return "Please fill in your name.";
    if (!regForm.email) return "Please fill in your email.";
    if (!regForm.password || !regForm.confirmPassword)
      return "Please fill in both password fields.";
    if (regForm.password !== regForm.confirmPassword)
      return "The passwords do not match.";
    if (!regForm.terms)
      return "Please agree to the terms and conditions to register.";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate last step again
    const error = validateInput();
    if (error) {
      toast.error(error);
      return;
    }

    setLoading(true);
    try {
      // Prepare payload
      const payload = {
        userName: regForm.userName,
        email: regForm.email,
        password: regForm.password,
        confirmPassword: regForm.confirmPassword,
        terms: regForm.terms,
      };

      //console.log("Payload being sent to backend:", payload);

      await signUp(payload);
      toast.success("One of us! You can now log in!");
      openWelcomeModal();
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
    //console.log("Form submitted:", regForm);
  };

  return (
    <div className="flex flex-grow items-center justify-center min-h-[calc(100vh-120px)]">
      <form
        onSubmit={handleSubmit}
        className=" bg-base-300 dark:bg-base-200 shadow-md rounded-lg px-8 pt-6 pb-8 w-full max-w-md flex flex-col gap-6"
      >
        <h2 className="text-xl font-bold text-center">Nice to meet you!</h2>

        <input
          type="text"
          name="userName"
          placeholder="Name"
          className="w-full px-5 py-2 border rounded-full shadow appearance-none focus:outline-none"
          value={regForm.userName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-5 py-2 border rounded-full shadow appearance-none focus:outline-none"
          value={regForm.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-5 py-2 border rounded-full shadow appearance-none focus:outline-none"
          value={regForm.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          className="w-full px-5 py-2 border rounded-full shadow appearance-none focus:outline-none"
          value={regForm.confirmPassword}
          onChange={handleChange}
          required
        />

        <div className="space-y-2 text-sm">
          <label className="flex justify-center items-center space-x-2">
            <input
              type="checkbox"
              name="terms"
              checked={regForm.terms}
              onChange={handleChange}
              className="h-5 w-5 focus:ring-blue-500 focus:ring-2 cursor-pointer"
              style={{ accentColor: "#1F46E5" }}
            />
            <span className="text-content-100 font-semibold">
              I agree to the{" "}
              <button
                type="button"
                className="text-purple-500 underline hover:text-blue-500 font-semibold cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                Terms and Conditions
              </button>
            </span>
          </label>
        </div>

        <div className="flex items-center justify-around flex-col m-2">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full mb-4"
          >
            Sign up
          </button>

          <p className="font-bold text-center">
            Already have an account? Log in{" "}
            <Link
              to="/login"
              className="cursor-pointer underline hover:text-blue-500"
            >
              here!
            </Link>
          </p>
        </div>
      </form>

      <TermsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Register;

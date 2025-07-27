import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { signIn } from "../data/auth";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [{ email, password }, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { setUser, user } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!email || !password) throw new Error("All fields are required");
      setLoading(true);
      const data = await signIn({ email, password });
      setUser(data.user);
      const firstName = data.user.userName.split(" ")[0];
      navigate("/");
      toast.success(`Welcome, ${firstName}!`);
      //console.log(email, password);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (user) return <Navigate to="/" />;

  return (
    <div className="flex flex-grow items-center justify-center min-h-[calc(100vh-120px)] mt-4">
      <form
        onSubmit={handleSubmit}
        className="bg-base-300 dark:bg-base-200 shadow-md rounded-lg px-8 pt-6 pb-8 w-full max-w-md flex flex-col gap-6"
      >
        <h2 className="text-xl font-bold text-center">Welcome back!</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-5 py-2 border rounded-full shadow appearance-none focus:outline-none"
          value={email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-5 py-2 border rounded-full shadow appearance-none focus:outline-none"
          value={password}
          onChange={handleChange}
          required
        />

        <div className="flex items-center justify-around flex-col mt-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full mb-4"
          >
            Log In
          </button>

          <p className="font-bold text-center">
            Don't have an account yet? Sign up{" "}
            <Link
              to="/signup"
              className="cursor-pointer underline hover:text-blue-500"
            >
              here!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router";

const ProfileDropdown = ({ user, logOut }) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const firstName = user.userName.split(" ")[0];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="rounded w-[74px] h-[27px] flex items-center justify-center text-white font-semibold cursor-pointer"
      >
        <div className="flex flex-col items-center relative">
          <span className="absolute text-[10.5px] left-1/2 -translate-x-1/2 -translate-y-1.5">
            {firstName}'s
          </span>
          <span className="font-bold">Account</span>
        </div>
      </button>

      {open && (
        <div className="absolute -right-6 top-10 w-30 bg-blue-500 rounded-lg shadow-lg z-50">
          <button
            onClick={() => navigate("/profile")}
            className="block w-full text-left px-4 py-2 hover:bg-blue-400 rounded-lg self-center text-white font-bold cursor-pointer"
          >
            My Profile
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="block w-full text-left px-4 py-2 hover:bg-blue-400 rounded-lg self-center text-white font-bold cursor-pointer"
          >
            My Orders
          </button>

          <button
            onClick={() => {
              logOut();
              navigate("/");
            }}
            className="block w-full text-left px-4 py-2 hover:bg-blue-400 rounded-lg self-center text-white font-bold cursor-pointer"
          >
            {user ? "Log out" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;

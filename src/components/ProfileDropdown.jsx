import React, { useState } from "react";
import { useNavigate } from "react-router";

const ProfileDropdown = ({ handleAuthClick, signedIn, setSignedIn }) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="relative inline-block text-left">
      {/* <div className="pt-1 mx-4 flex flex-row">
              </div> */}

      <button onClick={() => setOpen((prev) => !prev)} className="rounded">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Profile icon"
          className="h-[30px] ml-2"
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-blue-500 border border-gray-300 rounded shadow-lg z-50">
          <button
            onClick={() => navigate("/profile")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 self-center text-white font-bold "
          >
            My Profile
          </button>

          <button
            onClick={handleAuthClick}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 self-center text-white font-bold "
          >
            {signedIn ? "Log out" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;

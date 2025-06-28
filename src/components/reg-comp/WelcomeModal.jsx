import { Dialog } from "@headlessui/react";
import { useWelcomeModal } from "../../context/WelcomeModalContextProvider";
import { useAuth } from "../../hooks/useAuth";
import { useState, useEffect } from "react";

const WelcomeModal = () => {
  const { closeWelcomeModal, isWelcomeModalOpen } = useWelcomeModal();
  const { user } = useAuth();

  useEffect(() => {
    if (isWelcomeModalOpen) {
      // Make sure confetti will be mounted when modal is opened
      //setConfettiKey((prev) => prev + 1);
    }
  }, [isWelcomeModalOpen]);

  return (
    <div
      className={`fixed bg-clip-padding  top-0 left-0 h-full flex text-center items-center w-full justify-center  z-[99] backdrop-blur-sm bg-[rgba(8,11,31,0.80)] ease-in-out duration-200 ${
        isWelcomeModalOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      } `}
    >
      <div className="flex flex-col mx-2 overflow-hidden *:items-center lg:mx-auto max-w-[500px] lg:max-w-[50vw] xl:max-w-[40vw] my-auto rounded-2xl bg-center bg-cover border-white">
        <div className="flex flex-col relative px-8 -mt-10 items-center w-full bg-white p-2 rounded-b-2xl">
          <h2 className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 my-4">
            WELCOME, {user?.userName || "Adventurer!"}
          </h2>
          <p>Welcome to eCommerce! Are you ready to get the best deals?</p>
          <button
            className="btn-primary-light mt-6"
            onClick={closeWelcomeModal}
          >
            LET'S GO
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;

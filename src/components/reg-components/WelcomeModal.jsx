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
      <div className="flex flex-col mx-2 overflow-hidden *:items-center lg:mx-auto max-w-[500px] lg:max-w-[50vw] xl:max-w-[40vw] my-auto rounded-2xl bg-center bg-cover border-base-100">
        <div className="flex flex-col relative px-8 items-center w-full bg-base-100 p-4 rounded-b-2xl gap-4">
          <h2 className="uppercase font-semibold">
            WELCOME TO THE TECH OUTLET!!
          </h2>
          <p>Are you ready to save like a pro?</p>
          <p>
            Here is a discount code just for you: <strong>BESTDEALS50%</strong>
          </p>
          <p>Login now to get an additional 50% off your next order!</p>
          <button className="btn m-0" onClick={closeWelcomeModal}>
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;

import React from "react";
import { Dialog } from "@headlessui/react";

const TermsModal = ({ isOpen, onClose }) => (
  <Dialog open={isOpen} onClose={onClose} className="relative z-50">
    <div className="fixed inset-0 bg-pnp-black/30" aria-hidden="true" />
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="bg-pnp-white w-full max-w-md max-h-[80vh] rounded-2xl shadow-lg overflow-y-auto p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-pnp-black text-xl"
        >
          ✕
        </button>
        <Dialog.Title className="text-lg font-bold mb-4">
          Terms and Conditions
        </Dialog.Title>
        <div className="space-y-3 text-sm">
          <p>
            Fill in the terms and conditions here. This is a placeholder text to
            demonstrate the modal functionality. You can replace this with your
            actual terms and conditions content.
          </p>
        </div>
      </Dialog.Panel>
    </div>
  </Dialog>
);

export default TermsModal;

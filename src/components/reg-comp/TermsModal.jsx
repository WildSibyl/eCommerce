import React from "react";
import { Dialog } from "@headlessui/react";

const TermsModal = ({ isOpen, onClose }) => (
  <Dialog open={isOpen} onClose={onClose} className="relative z-50">
    <div className="fixed inset-0 bg--black/30" aria-hidden="true" />
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="bg-base-100 w-full max-w-md max-h-[80vh] rounded-2xl shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-800 hover:text-black text-xl"
        >
          ✕
        </button>
        <Dialog.Title className="text-lg font-bold mb-4 mx-auto text-center">
          Terms and Conditions
        </Dialog.Title>
        <div className="space-y-3 text-sm overflow-y-auto max-h-[70vh] p-4">
          <p>
            Fill in the terms and conditions here. This is a placeholder text to
            demonstrate the modal functionality. You can replace this with your
            actual terms and conditions content. Fill in the terms and
            conditions here. This is a placeholder text to demonstrate the modal
            functionality. You can replace this with your actual terms and
            conditions content. Fill in the terms and conditions here. This is a
            placeholder text to demonstrate the modal functionality. You can
            replace this with your actual terms and conditions content. Fill in
            the terms and conditions here. This is a placeholder text to
            demonstrate the modal functionality. You can replace this with your
            actual terms and conditions content. Fill in the terms and
            conditions here. This is a placeholder text to demonstrate the modal
            functionality. You can replace this with your actual terms and
            conditions content. Fill in the terms and conditions here. This is a
            placeholder text to demonstrate the modal functionality. You can
            replace this with your actual terms and conditions content. Fill in
            the terms and conditions here. This is a placeholder text to
            demonstrate the modal functionality. You can replace this with your
            actual terms and conditions content. Fill in the terms and
            conditions here. This is a placeholder text to demonstrate the modal
            functionality. You can replace this with your actual terms and
            conditions content. Fill in the terms and conditions here. This is a
            placeholder text to demonstrate the modal functionality. You can
            replace this with your actual terms and conditions content.Fill in
            the terms and conditions here. This is a placeholder text to
            demonstrate the modal functionality. You can replace this with your
            actual terms and conditions content.Fill in the terms and conditions
            here. This is a placeholder text to demonstrate the modal
            functionality. You can replace this with your actual terms and
            conditions content.Fill in the terms and conditions here. This is a
            placeholder text to demonstrate the modal functionality. You can
            replace this with your actual terms and conditions content.Fill in
            the terms and conditions here. This is a placeholder text to
            demonstrate the modal functionality. You can replace this with your
            actual terms and conditions content.Fill in the terms and conditions
            here. This is a placeholder text to demonstrate the modal
            functionality. You can replace this with your actual terms and
            conditions content.Fill in the terms and conditions here. This is a
            placeholder text to demonstrate the modal functionality. You can
            replace this with your actual terms and conditions content.Fill in
            the terms and conditions here. This is a placeholder text to
            demonstrate the modal functionality. You can replace this with your
            actual terms and conditions content.Fill in the terms and conditions
            here. This is a placeholder text to demonstrate the modal
            functionality. You can replace this with your actual terms and
            conditions content.Fill in the terms and conditions here. This is a
            placeholder text to demonstrate the modal functionality. You can
            replace this with your actual terms and conditions content.Fill in
            the terms and conditions here. This is a placeholder text to
            demonstrate the modal functionality. You can replace this with your
            actual terms and conditions content.Fill in the terms and conditions
            here. This is a placeholder text to demonstrate the modal
            functionality. You can replace this with your actual terms and
            conditions content.Fill in the terms and conditions here. This is a
            placeholder text to demonstrate the modal functionality. You can
            replace this with your actual terms and conditions content.Fill in
            the terms and conditions here. This is a placeholder text to
            demonstrate the modal functionality. You can replace this with your
            actual terms and conditions content.Fill in the terms and conditions
            here. This is a placeholder text to demonstrate the modal
            functionality. You can replace this with your actual terms and
            conditions content.
          </p>
        </div>
      </Dialog.Panel>
    </div>
  </Dialog>
);

export default TermsModal;

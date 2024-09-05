import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white rounded-lg max-w-md p-6">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{children}</h2>
          <p>
            {/* Here you can add the specific information for each career path */}
            {/* For now, we are just displaying the career path name */}
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;

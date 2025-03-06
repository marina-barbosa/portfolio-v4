/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

export const ContactModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Say Hi 👋</h2>
        <form
        //   method="POST"
          name="contato-portfolio"
          action={"https://marina-barbosa.netlify.app/"}
          netlify
          className="flex flex-col"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label className="mb-2">
            Your Name
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 border rounded mt-1"
            />
          </label>
          <label className="mb-2">
            Your Email
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 border rounded mt-1"
            />
          </label>
          <label className="mb-4">
            Your Message
            <textarea
              name="message"
              required
              className="w-full p-2 border rounded mt-1"
              rows={4}
            />
          </label>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Send
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-gray-600 hover:text-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

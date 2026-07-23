import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "../styles/modal.css";
import { useModalContext } from "../context/useModalContext";

const eventListener = "keydown";

export const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const { state, setState } = useModalContext();

  const closeModal = () => {
    setState(false);
  };

  const modalRoot = document.getElementById("modal");

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setState(false);
      }
    };
    if (state) {
      document.addEventListener(eventListener, handleEsc);
    }

    return () => {
      document.removeEventListener(eventListener, handleEsc);
    };
  }, [setState, state]);

  if (!state || !modalRoot) {
    return null;
  }

  return createPortal(
    <div className="overlay" onClick={closeModal}>
      <div className="modal" onClick={handleContentClick} ref={modalRef}>
        {children}
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>,
    modalRoot,
  );
};

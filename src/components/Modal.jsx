import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "../styles/modal.css";
import { useModalContext } from "../context/useModalContext";
import { ArrowBack } from "./Icons";

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
        <button className="close-button" onClick={closeModal}>
          <ArrowBack width="25px" height="25px" />
        </button>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

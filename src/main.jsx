import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";
import { GlobalMoviesProvider } from "./context/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <GlobalMoviesProvider>
        <App />
      </GlobalMoviesProvider>
    </ModalProvider>
  </StrictMode>,
);

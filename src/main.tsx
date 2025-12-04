import React from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import { RouterProvider } from "react-router-dom";
import router from "./routes"; // imports src/routes/index.tsx
=======
import { BrowserRouter } from "react-router-dom";
import App from "./App";
>>>>>>> 2d927cd5182ea242b10cdc696d9ca963019397f8
import "./styles/styles.css";
import "./index.css"

const container = document.getElementById("root");
if (container) {
<<<<<<< HEAD
  createRoot(container).render(<RouterProvider router={router} />);
}
=======
  createRoot(container).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
>>>>>>> 2d927cd5182ea242b10cdc696d9ca963019397f8

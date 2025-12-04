import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes"; // imports src/routes/index.tsx
import "./styles/styles.css";
import "./index.css"

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(<RouterProvider router={router} />);
}
import React from "react";
import { createRoot } from "react-dom/client";
import "@styles/styles.css";
import { RootProvider } from "./RootProvider";

const rootContainer = document.getElementById("root");
if (rootContainer) {
  const root = createRoot(rootContainer);
  root.render(
    <React.StrictMode>
      <RootProvider />
    </React.StrictMode>,
  );
}

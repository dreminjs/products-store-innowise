import React from "react";
import { createRoot } from "react-dom/client";

const rootContainer = document.getElementById("root");
if (rootContainer) {
  const root = createRoot(rootContainer);
  root.render(
    <React.StrictMode>
      <h1>Hello from Minsk.</h1>
    </React.StrictMode>,
  );
}

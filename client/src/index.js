import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import { HashRouter } from "react-router-dom"; // ✅ Use HashRouter for Vercel Deployment

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <HashRouter>  {/* ✅ Ensures Routing Works on Vercel */}
          <App />
        </HashRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
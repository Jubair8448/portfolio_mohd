import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { ThemeProvider } from "@material-tailwind/react";
import { HashRouter } from 'react-router-dom'; // Import HashRouter

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </ThemeProvider>
);
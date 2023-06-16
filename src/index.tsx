import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./redux";

import App from "./App";
import GlobalStyle from "./globalStyle";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "rgb(255,49,49)",
  },
  media: {
    tablet: "(max-width: 740px)",
  },
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

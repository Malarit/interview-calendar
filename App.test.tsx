import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";

import App from "./src/App";

const mockStore = configureStore([]);

const theme = {
  colors: {
    primary: "rgb(255,49,49)",
  },
  media: {
    tablet: "(max-width: 740px)",
  },
};

const setInitalStateDate = () => {
  const date = new Date();

  const year = date.getFullYear();
  const months = date.getMonth();
  const day = date.getDate();

  return {
    months,
    year,
    day,
    activeNumber: day,
  };
};

const setInitalStateCells = () => {
  const rowsCount = 24;
  const columnCount = 7;
  const cells = rowsCount * columnCount;

  return {
    rowsCount,
    columnCount,
    cells,
    events: [],
    deleteActive: undefined,
  };
};

describe("App", () => {
  let store: MockStoreEnhanced<unknown, {}>;
  let component: any;

  beforeEach(() => {
    store = mockStore({
      dateReducer: setInitalStateDate(),
      cellsReducer: setInitalStateCells(),
    });

    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    );
  });

  it("App is rendered", () => {
    expect(screen.getByText("Interview Calendar")).toBeInTheDocument();
  });
});

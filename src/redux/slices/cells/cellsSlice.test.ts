import cellsReducer, { setEvent, deleteEvent, setDeleteActive } from "./slice";
import { cellsState, event } from "./types";

const payloadSetEvent: event = {
  year: 2022,
  month: 1,
  day: 10,
  hour: 0,
  minutes: 0,
};

describe("cellsReducer", () => {
  it("should return default state when passed an action", () => {
    const result = cellsReducer(undefined, { type: "" });
    expect(result).toHaveProperty("events", []);
  });

  it("setEvent is work", () => {
    const action = { type: setEvent.type, payload: payloadSetEvent };

    const result = cellsReducer(undefined, action);

    expect(result.events[0].day).toBe(10);
  });

  it("deleteEvent is work", () => {
    const actionAdd = { type: setEvent.type, payload: payloadSetEvent };
    const actionDelete = { type: deleteEvent.type, payload: payloadSetEvent };

    cellsReducer(undefined, actionAdd);
    const result = cellsReducer(undefined, actionDelete);

    expect(result.events).toEqual([]);
  });

  it("setDeleteActive is work", () => {
    const action = { type: setDeleteActive.type, payload: payloadSetEvent };

    const result = cellsReducer(undefined, action);

    expect(result.deleteActive?.year).toBe(2022);
  });
});

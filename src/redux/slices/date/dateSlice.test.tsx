import dateReducer, {
  incrementMonths,
  decrementMonths,
  setActiveNumber,
  setToday,
} from "./slice";


describe("dateReducer", () => {
  it("should return default state when passed an action", () => {
    const result = dateReducer(undefined, { type: "" });
    expect(result.day).toBe(new Date().getDate());
  });

  it("incrementMonths is work", () => {
    const action = { type: incrementMonths.type, payload: undefined };

    const result = dateReducer(undefined, action);

    expect(result.months).not.toBe(new Date().getMonth());
  });

  it("decrementMonths is work", () => {
    const action = { type: incrementMonths.type, payload: undefined };

    const result = dateReducer(undefined, action);

    expect(result.months).not.toBe(new Date().getMonth());
  });

  it("setActiveNumber is work", () => {
    const action = { type: setActiveNumber.type, payload: 10 };

    const result = dateReducer(undefined, action);

    expect(result.activeNumber).toBe(10);
  });

  it("setToday is work", () => {
    const action = { type: setActiveNumber.type, payload: undefined };

    const result = dateReducer(undefined, action);

    expect(result.year).toBe(new Date().getFullYear());
  });
});

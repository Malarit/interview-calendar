const getDaysAndWeeks = (year: number, month: number) => {
  const days = new Date(year, month + 1, 0).getDate();

  return [...new Array(days)].map((_, i) => ({
    date: i + 1,
    week: new Date(year, month, i + 1).toLocaleString("en", {
      weekday: "long",
    }),
  }));
};

export default getDaysAndWeeks;

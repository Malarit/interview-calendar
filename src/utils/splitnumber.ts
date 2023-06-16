export function splitNumber(value: number) {
  var str = ("" + value).split(".");
  return { int: +str[0], remainder : str[1] ? +str[1] : 0 };
}

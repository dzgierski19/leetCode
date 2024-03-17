function stringCompare(s: string): string {
  const arr = Array.from(s);
  const index = arr.indexOf("#");
  if (index === -1) {
    return arr.join("");
  }
  if (index === 0) {
    arr.splice(0, 1);
    const result = arr.join("");
    return stringCompare(result);
  }
  arr.splice(index - 1, 2);
  if (arr.indexOf("#") !== -1) {
    const result = arr.join("");
    return stringCompare(result);
  }
  return arr.join("");
}

function filterList(l) {
  return l.filter((l) => typeof l !== "string");
}
console.log(filterList([1, 2, "a", "b"]));

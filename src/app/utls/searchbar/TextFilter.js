function textWash(text) {
  let filter = ["<", ">", "/", "|", "?", "#", "~", "*"];
  text = text.split("");
  let newText = text.filter((ele) => (filter.includes(ele) ? "" : ele));
  return newText.join("");
}
export { textWash };

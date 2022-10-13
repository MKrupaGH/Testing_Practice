const reverse = (word) => {
  if (word.length === 0) {
    return "";
  }
  console.log(typeof Array.from(word).reverse().join(""));
  return Array.from(word).reverse().join("");
};

module.exports = reverse;

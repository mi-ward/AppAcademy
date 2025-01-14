module.exports = function reverseString(string) {
  if (typeof string !== "string") throw new TypeError(`${string} is not of Type: String`)
  return string.split("").reduce((reversed, char) => char + reversed, "")
};

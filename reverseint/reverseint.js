function reverseInt(number) {
  if (typeof number !== "number") {
    throw new Error(number + " must be a number");
  }

  const reversed = number
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(number);
}

module.exports = { reverseInt };

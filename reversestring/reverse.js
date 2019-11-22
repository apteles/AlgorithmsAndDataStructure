function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

function reversev2(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

function reversev3(str) {
  return str.reduce((incrementer, character) => incrementer + character, "");
}

module.exports = { reverse, reversev2, reversev3 };

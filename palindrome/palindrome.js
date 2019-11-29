function palindrome(str) {
  let reversed = str
    .split("")
    .reverse()
    .join("");
  return reversed === str;
}

module.exports = palindrome;

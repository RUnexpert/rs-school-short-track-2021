/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  const arr = [];
  let number = n;
  while (number) {
    arr.push(number % 10);
    number = Math.floor(number / 10);
  }

  for (let i = 0; i < arr.length; i++) {
    let a = 0;
    for (let j = arr.length - 1; j >= 0; j--) {
      if (j !== i) {
        a = a * 10 + arr[j];
      }
    }
    result = Math.max(a, result);
  }
  return result;
}

module.exports = deleteDigit;

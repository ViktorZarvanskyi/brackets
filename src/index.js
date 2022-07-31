module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let bracketsPair = {};

  if (str.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    bracketsPair[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str[i]) && bracketsPair[str[i]] !== str[i]) {
      stack.push(str[i]);
    } else if (bracketsPair[str[i]] === str[i] && stack[stack.length - 1] !== str[i]) {
      stack.push(str[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (bracketsPair[str[i]] === stack[stack.length - 1]) {
        stack.pop()
      } else {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}











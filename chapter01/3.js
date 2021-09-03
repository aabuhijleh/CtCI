const urlify = (s) => {
  let result = "";
  for (const char of s.trim()) {
    if (char === " ") {
      result += "%20";
    } else {
      result += char;
    }
  }
  return result;
};

// Tests
console.log(urlify("Mr John Smith   "));

// Time: O(N)

// Other solutions: https://github.com/careercup/CtCI-6th-Edition-JavaScript/tree/master/chapter01/1.3%20-%20URLify

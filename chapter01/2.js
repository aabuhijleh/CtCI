const getCharFreqMap = (s) => {
  const charMap = {};
  for (const char of s) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }
  return charMap;
};

const checkPrem = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  const aMap = getCharFreqMap(a);
  const bMap = getCharFreqMap(b);

  for (akey of Object.keys(aMap)) {
    if (aMap[akey] !== bMap[akey]) {
      return false;
    }
  }

  for (bkey of Object.keys(bMap)) {
    if (aMap[bkey] !== bMap[bkey]) {
      return false;
    }
  }

  return true;
};

// Tests
console.log(checkPrem("aba", "aab"), "true");
console.log(checkPrem("aba", "aaba"), "false");
console.log(checkPrem("aba", "aa"), "false");

// Time: O(A + B)

// Other solutions: https://github.com/careercup/CtCI-6th-Edition-JavaScript/blob/master/chapter01/1.2%20-%20Check%20Perm/checkPermute.js

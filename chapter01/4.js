const getCharFreqMap = (s) => {
  const charMap = {};
  for (const char of s) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }
  return charMap;
};

const isPermPalindrome = (s) => {
  const charFreqMap = getCharFreqMap(s.toLowerCase().replace(/\s/g, ""));

  let oddFreqCount = 0;
  for (const freq of Object.values(charFreqMap)) {
    if (freq % 2 !== 0) {
      if (oddFreqCount === 0) {
        oddFreqCount++;
      } else {
        return false;
      }
    }
  }

  return true;
};

// Tests
console.log(isPermPalindrome("Tact Coa"), "true");
console.log(isPermPalindrome("Tact boa"), "false");

// Time: O(N)

// Other solutions: https://github.com/careercup/CtCI-6th-Edition-JavaScript/blob/master/chapter01/1.1%20-%20Is%20Unique/isPermPalindrome.js
